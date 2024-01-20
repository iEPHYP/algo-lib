import { AdjacencyListGraph, AdjacencyListVertex } from '../../graph-storage';

// Complexity O(N + M)TS
export const adjacencyListGraphDfs = ({
  graph,
  starterVertexIndex = 0,
  starterVisitedVerticesMap,
  onVertexVisit,
}: // TODO: make up a single interface for DFS and BFS parameters
{
  graph: AdjacencyListGraph;
  // TODO: add the same param for other DFS and BFS versions
  starterVertexIndex?: number;
  starterVisitedVerticesMap?: boolean[];
  onVertexVisit?: (vertex: AdjacencyListVertex) => void;
}) => {
  const visitedVerticesMap: boolean[] = starterVisitedVerticesMap || [];

  const search = (vertex: AdjacencyListVertex) => {
    onVertexVisit?.(vertex);

    visitedVerticesMap[vertex.index] = true;

    vertex.adjacentVertexIndices.forEach((adjacentVertexIndex) => {
      const adjacentVertexVisited = visitedVerticesMap[adjacentVertexIndex];
      const adjacentVertex = graph.getVertex(adjacentVertexIndex);

      if (!adjacentVertexVisited) {
        search(adjacentVertex);
      }
    });
  };

  const starterVertex = graph.getVertex(starterVertexIndex);

  search(starterVertex);

  return { visitedVerticesMap };
};
