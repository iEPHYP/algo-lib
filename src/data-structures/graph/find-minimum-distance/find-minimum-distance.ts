import { adjacencyListGraphBfs } from '../bfs';
import { AdjacencyListGraph } from '../graph-storage';

// TODO: change this logic according to the difference weight, instead of fixed 1
export const findMinimumDistances = (
  graph: AdjacencyListGraph,
  fromVertexIndex: number = 0
  // TODO: realize
  // toVertexIndex?: number
) => {
  const { distancesMap } = adjacencyListGraphBfs({
    graph,
    starterVertexIndex: fromVertexIndex,
  });

  return { distancesMap };
};
