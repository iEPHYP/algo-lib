import { getNormalizedEdges, RawEdges } from '../edges-storage';
import { AdjacencyMatrixGraph } from './adjacency-matrix-storage.types';

export const convertEdgesToAdjacencyMatrixGraph = (
  rawEdges: RawEdges,
  // TODO: test directed graph
  indirected = true
) => {
  const edges = getNormalizedEdges(rawEdges);

  const graph: AdjacencyMatrixGraph = [];

  edges.forEach(({ vertexOutIndex, vertexInIndex }) => {
    graph[vertexOutIndex] = graph[vertexOutIndex] || [];
    const vertexOutRow = graph[vertexOutIndex];

    vertexOutRow[vertexInIndex] = 1;

    if (indirected) {
      graph[vertexInIndex] = graph[vertexInIndex] || [];
      const vertexInRow = graph[vertexInIndex];

      vertexInRow[vertexOutIndex] = 1;
    }
  });

  return graph;
};
