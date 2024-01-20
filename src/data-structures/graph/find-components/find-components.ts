import { adjacencyListGraphDfs } from '../dfs';
import { AdjacencyListGraph, AdjacencyListVertex } from '../graph-storage';

// Complexity O(M + N * (N + M)) => O(N^2 + N * M)
export const findGraphComponents = (graph: AdjacencyListGraph) => {
  // TODO: move this kind of maps into custom arrays with methods to return false instead of undefined, visit, isVisited(index)
  let currentVisitedVerticesMap: boolean[] = [];
  const graphComponents: AdjacencyListVertex[][] = [];

  // TODO: I think we can optimise this by saving the nextUnvisitedIndex in the currentVisitedVerticesMap
  // and provide it as a starterVertexIndex for DFS, and start nextUnvisitedIndex from 0 index,
  // and loop until no nextUnvisitedIndex left.
  // This will allows us remain complexity to O(N + M), instead of O(N^2 + N * M)
  graph.forEach((vertex, vertexIndex) => {
    const vertexVisited = currentVisitedVerticesMap[vertexIndex];
    if (vertexVisited) {
      return;
    }
    currentVisitedVerticesMap[vertexIndex] = true;

    const graphComponent: AdjacencyListVertex[] = [];
    const { visitedVerticesMap } = adjacencyListGraphDfs({
      graph,
      starterVertexIndex: vertexIndex,
      starterVisitedVerticesMap: currentVisitedVerticesMap,
      onVertexVisit: (vertex) => {
        graphComponent.push(vertex);
      },
    });
    currentVisitedVerticesMap = visitedVerticesMap;
    graphComponents.push(graphComponent);
  });

  return { graphComponents };
};
