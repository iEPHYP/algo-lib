import { getNormalizedEdges } from '../edges-storage';
import { RawEdges } from '../edges-storage/edges-storage.types';
import { AdjacencyListGraph } from './adjacency-list.types';

export const convertEdgesToAdjacencyListGraph = (
  rawEdges: RawEdges,
  // TODO: test directed graph
  indirected = true
): AdjacencyListGraph => {
  const edges = getNormalizedEdges(rawEdges);
  const adjacencyListGraph = new AdjacencyListGraph();

  edges.forEach(({ vertexOutIndex, vertexInIndex }) => {
    const vertexOut = adjacencyListGraph.getVertex(vertexOutIndex);

    adjacencyListGraph.setVertexAt(vertexOutIndex, vertexOut);

    vertexOut.adjacentVertexIndices.push(vertexInIndex);

    if (indirected) {
      const vertexIn = adjacencyListGraph.getVertex(vertexInIndex);

      adjacencyListGraph.setVertexAt(vertexInIndex, vertexIn);

      vertexIn.adjacentVertexIndices.push(vertexOutIndex);
    }
  });

  return adjacencyListGraph;
};
