export interface Edge<TVertex = number> {
  vertexOutIndex: TVertex;
  vertexInIndex: TVertex;
}

export type EdgesStoredGraph = Edge[];

export type RawEdges = [number, number][];
