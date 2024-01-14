import { AdjacencyListGraph, AdjacencyListVertex } from '../../graph-storage';

// Complexity O(N + M)TS
export const adjacencyListGraphDfs = (
  graph: AdjacencyListGraph,
  onVertexVisit: (vertex: AdjacencyListVertex) => void
) => {
  const visitedVerticesMap: boolean[] = [];

  const search = (vertex: AdjacencyListVertex) => {
    onVertexVisit(vertex);

    visitedVerticesMap[vertex.index] = true;

    vertex.adjacentVertexIndices.forEach((adjacentVertexIndex) => {
      const adjacentVertexVisited = visitedVerticesMap[adjacentVertexIndex];
      const adjacentVertex = graph[adjacentVertexIndex];

      if (!adjacentVertexVisited) {
        search(adjacentVertex);
      }
    });
  };

  const firstVertex = graph[0];

  search(firstVertex);
};
