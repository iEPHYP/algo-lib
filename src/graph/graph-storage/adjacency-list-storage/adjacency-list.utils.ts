import { getNormalizedEdges } from '../edges-storage';
import { RawEdges } from '../edges-storage/edges-storage.types';
import { AdjacencyListGraph } from './adjacency-list.types';

export const convertEdgesToAdjacencyListGraph = (
  rawEdges: RawEdges,
  // TODO: test directed graph
  indirected = true
): AdjacencyListGraph => {
  const edges = getNormalizedEdges(rawEdges);
  const adjacencyListGraph: AdjacencyListGraph = [];

  edges.forEach(({ vertexOutIndex, vertexInIndex }) => {
    adjacencyListGraph[vertexOutIndex] = adjacencyListGraph[vertexOutIndex] || {
      index: vertexOutIndex,
      adjacentVertexIndices: [],
    };

    adjacencyListGraph[vertexOutIndex].adjacentVertexIndices.push(vertexInIndex);

    if (indirected) {
      adjacencyListGraph[vertexInIndex] = adjacencyListGraph[vertexInIndex] || {
        index: vertexInIndex,
        adjacentVertexIndices: [],
      };

      adjacencyListGraph[vertexInIndex].adjacentVertexIndices.push(vertexOutIndex);
    }
  });

  return adjacencyListGraph;
};
