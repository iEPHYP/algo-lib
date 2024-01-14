export interface AdjacencyListVertex {
  // use this interface for extending
  index: number;
  adjacentVertexIndices: number[];
}

export type AdjacencyListGraph = AdjacencyListVertex[];
