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

    graph[vertexIndex].forEach((connectedToAdjancencyVertex, adjancencyVertexIndex) => {
      if (connectedToAdjancencyVertex && !visitedVerticesMap[adjancencyVertexIndex]) {
        search(adjancencyVertexIndex);
      }
    });
  };

  search(0);
};
