import { convertEdgesToAdjacencyMatrixGraph } from '../../graph-storage/adjacency-matrix-storage/adjacency-matrix-storage.utils';
import { indirectConnectedGraphRawEdges } from '../../rawEdges.mock';
import { adjacencyMatrixGraphDfs } from './dfs.adjacency-matrix';

test('adjacencyMatrixGraphDfs should print visited vertices in the right order', () => {
  const graph = convertEdgesToAdjacencyMatrixGraph(indirectConnectedGraphRawEdges);

  const visitedVertexIndices: number[] = [];

  adjacencyMatrixGraphDfs(graph, (vertexIndex) => {
    visitedVertexIndices.push(vertexIndex);
  });

  expect(visitedVertexIndices).toMatchSnapshot();
});
