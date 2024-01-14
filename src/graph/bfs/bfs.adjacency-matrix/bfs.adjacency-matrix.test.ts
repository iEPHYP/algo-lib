import { convertEdgesToAdjacencyMatrixGraph } from '../../graph-storage/adjacency-matrix-storage/adjacency-matrix-storage.utils';
import { indirectConnectedGraphRawEdges } from '../../rawEdges.mock';
import { adjacencyMatrixGraphBfs } from './bfs.adjacency-matrix';

test('adjacencyMatrixGraphDfs should print visited vertices in the right order', () => {
  const graph = convertEdgesToAdjacencyMatrixGraph(indirectConnectedGraphRawEdges);

  const visitedVertexIndices: number[] = [];

  adjacencyMatrixGraphBfs(graph, (vertexIndex) => {
    visitedVertexIndices.push(vertexIndex);
  });

  expect(visitedVertexIndices).toMatchSnapshot();
});
