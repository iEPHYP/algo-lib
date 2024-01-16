import { Queue } from '@/queue';

import { AdjacencyListGraph, AdjacencyListVertex } from '../../graph-storage';

// Complexity O(N + M)TS
export const adjacencyListGraphBfs = ({
  graph,
  starterVertexIndex = 0,
  onVertexVisit,
}: {
  graph: AdjacencyListGraph;
  starterVertexIndex?: number;
  onVertexVisit?: (vertex: AdjacencyListVertex) => void;
}) => {
  // TODO: rewrite all visiteMaps into VisitMap from @/visit-map
  const visitedVerticesMap: boolean[] = [];
  // TODO: better to create a class for Maps like this
  const distancesMap: number[] = [];
  distancesMap[starterVertexIndex] = 0;

  const vertexIndicesQueue = new Queue();
  vertexIndicesQueue.subscribeToEnqueue((enqueuedVertexIndex) => {
    visitedVerticesMap[enqueuedVertexIndex] = true;
  });
  vertexIndicesQueue.enqueue(starterVertexIndex);

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
        // TODO: it might be better to add here onAdjacentVertexQueued and extract distancesMap
        distancesMap[adjacentVertexIndex] = (distancesMap[visitingVertex.index] ?? 0) + 1;
      }
    });
  }

  return { visitedVerticesMap, distancesMap };
};
