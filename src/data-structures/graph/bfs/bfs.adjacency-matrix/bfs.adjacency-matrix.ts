import { Queue } from '@/data-structures/queue';

import { AdjacencyMatrixGraph } from '../../graph-storage';

// Complexity O(N^2)TS
export const adjacencyMatrixGraphBfs = ({
  graph,
  onVertexVisit,
}: {
  graph: AdjacencyMatrixGraph;
  onVertexVisit?: (visitedVertexIndex: number) => void;
}) => {
  const visitedVerticesMap: boolean[] = [];

  const firstVertexIndex = 0;
  const vertexIndicesQueue = new Queue();
  vertexIndicesQueue.subscribeToEnqueue((enqueuedVertexIndex) => {
    visitedVerticesMap[enqueuedVertexIndex] = true;
  });
  vertexIndicesQueue.enqueue(firstVertexIndex);

  while (!vertexIndicesQueue.empty()) {
    const visitingVertexIndex = vertexIndicesQueue.dequeue();
    if (visitingVertexIndex === null) {
      break;
    }
    onVertexVisit?.(visitingVertexIndex);
    const adjacencyVerticesConnectionMap = graph[visitingVertexIndex];
    adjacencyVerticesConnectionMap.forEach((adjacentVertexConnected, adjacentVertexIndex) => {
      const adjacentVertexVisited = visitedVerticesMap[adjacentVertexIndex];
      if (adjacentVertexConnected && !adjacentVertexVisited) {
        vertexIndicesQueue.enqueue(adjacentVertexIndex);
      }
    });
  }

  return { visitedVerticesMap };
};
