import { AdjacencyMatrixGraph } from '../../graph-storage';

// Complexity O(N^2 + M)T, O(N^2 + M)S
export const adjacencyMatrixGraphDfs = (
  graph: AdjacencyMatrixGraph,
  onVertexVisit: (vertexIndex: number) => void
) => {
  const visitedVerticesMap: (boolean | undefined)[] = [];

  const search = (vertexIndex: number) => {
    onVertexVisit(vertexIndex);
    visitedVerticesMap[vertexIndex] = true;

    const verticesConnectionMap = graph[vertexIndex];
    verticesConnectionMap.forEach((adjacentVertexConnected, adjacentVertexIndex) => {
      const adjacentVertexVisited = visitedVerticesMap[adjacentVertexIndex];
      if (adjacentVertexConnected && !adjacentVertexVisited) {
        search(adjacentVertexIndex);
      }
    });
  };

  search(0);
};
