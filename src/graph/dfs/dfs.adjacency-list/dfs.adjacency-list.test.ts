import { convertEdgesToAdjacencyListGraph } from '../../graph-storage';
import { rawEdges } from '../../rawEdges.mock';
import { adjacencyListGraphDfs } from './dfs.adjacency-list';

test('adjacencyListGraphDfs should print visited vertices in the right order', () => {
  const graph = convertEdgesToAdjacencyListGraph(rawEdges);

  const visitedVertexIndices: number[] = [];

  adjacencyListGraphDfs(graph, (vertex) => {
    visitedVertexIndices.push(vertex.index);
  });

  expect(visitedVertexIndices).toMatchSnapshot();
});