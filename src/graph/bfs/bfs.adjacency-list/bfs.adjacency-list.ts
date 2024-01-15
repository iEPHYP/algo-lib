import { Queue } from '@/queue';

import { AdjacencyListGraph, AdjacencyListVertex } from '../../graph-storage';

// Complexity O(N + M)TS
export const adjacencyListGraphBfs = ({
  graph,
  onVertexVisit,
}: {
  graph: AdjacencyListGraph;
  onVertexVisit?: (vertex: AdjacencyListVertex) => void;
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
    const visitingVertex = graph.getVertex(visitingVertexIndex);
    onVertexVisit?.(visitingVertex);
    visitingVertex.adjacentVertexIndices.forEach((adjacentVertexIndex) => {
      const adjacentVertexVisited = visitedVerticesMap[adjacentVertexIndex];
      if (!adjacentVertexVisited) {
        vertexIndicesQueue.enqueue(adjacentVertexIndex);
      }
    });
  }

  return { visitedVerticesMap };
};
