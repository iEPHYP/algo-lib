export interface AdjacencyListVertex {
  // use this interface to extend custom Vertex interfaces
  index: number;
  adjacentVertexIndices: number[];
}

export interface AbstractAdjacencyListGraphConstructorOptions<
  TVertex extends AdjacencyListVertex = AdjacencyListVertex,
> {
  emptyVertexFactory: (index: number) => TVertex;
  size?: number;
}

export class AbstractAdjacencyListGraph<TVertex extends AdjacencyListVertex = AdjacencyListVertex> {
  private adjacencyList: (
    | TVertex
    // undefined, cuz there might be a vertex without edges
    | undefined
  )[] = [];
  private emptyVertexFactory: (index: number) => TVertex;

  constructor({
    emptyVertexFactory,
    size = 0,
  }: AbstractAdjacencyListGraphConstructorOptions<TVertex>) {
    this.emptyVertexFactory = emptyVertexFactory;
    size !== undefined && this.resize(size);
  }

  public setVertexAt(index: number, value: TVertex) {
    this.adjacencyList[index] = value;
    this.resize(this.adjacencyList.length);
  }

  public getVertex(index: number): TVertex {
    this.resize(this.adjacencyList.length);

    return this.getInitializedVertex(index);
  }

  private getInitializedVertex(index: number): TVertex {
    const emptyValue = this.getNewEmptyVertex(index);
    if (!this.adjacencyList[index]) {
      this.adjacencyList[index] = emptyValue;
    }

    return this.adjacencyList[index] || emptyValue;
  }

  private getNewEmptyVertex(index: number): TVertex {
    return this.emptyVertexFactory(index);
  }

  public forEach(iterator: (vertex: TVertex, index: number) => void) {
    for (let i = 0; i < this.size(); i++) {
      const index = i;
      const initializedVertex = this.getInitializedVertex(index);
      iterator(initializedVertex, index);
    }
  }

  private _size = 0;

  public size() {
    return this._size;
  }

  public resize(size: number) {
    this._size = size;
    if (size > this.adjacencyList.length) {
      for (let i = this.adjacencyList.length; i < size - 1; i++) {
        const index = i;
        this.setVertexAt(index, this.getNewEmptyVertex(index));
      }
    }
  }

  public toList() {
    return this.adjacencyList;
  }
}

export class AdjacencyListGraph extends AbstractAdjacencyListGraph<AdjacencyListVertex> {
  constructor(size?: number) {
    super({ emptyVertexFactory: (index) => ({ index, adjacentVertexIndices: [] }), size });
  }
}
