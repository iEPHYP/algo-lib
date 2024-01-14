import { convertEdgesToAdjacencyListGraph } from '../../graph-storage';
import { indirectConnectedGraphRawEdges } from '../../rawEdges.mock';
import { adjacencyListGraphBfs } from './bfs.adjacency-list';

test('adjacencyListGraphDfs should print visited vertices in the right order', () => {
  const graph = convertEdgesToAdjacencyListGraph(indirectConnectedGraphRawEdges);

  const visitedVertexIndices: number[] = [];

  adjacencyListGraphBfs(graph, (vertex) => {
    visitedVertexIndices.push(vertex.index);
  });

  expect(visitedVertexIndices).toMatchSnapshot();
});
