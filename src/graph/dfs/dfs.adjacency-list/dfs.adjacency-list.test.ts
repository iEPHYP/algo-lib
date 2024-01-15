import { convertEdgesToAdjacencyListGraph } from '../../graph-storage';
import { indirectConnectedGraphRawEdges } from '../../rawEdges.mock';
import { adjacencyListGraphDfs } from './dfs.adjacency-list';

test('adjacencyListGraphDfs should print visited vertices in the right order', () => {
  const graph = convertEdgesToAdjacencyListGraph(indirectConnectedGraphRawEdges);

  const visitedVertexIndices: number[] = [];

  const { visitedVerticesMap } = adjacencyListGraphDfs({
    graph,
    onVertexVisit: (vertex) => {
      visitedVertexIndices.push(vertex.index);
    },
  });

  expect(visitedVertexIndices).toMatchSnapshot();
  expect(visitedVerticesMap).toMatchSnapshot();
});
