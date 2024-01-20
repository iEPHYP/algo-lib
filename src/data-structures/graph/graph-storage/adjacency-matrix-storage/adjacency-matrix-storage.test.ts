import { indirectConnectedGraphRawEdges } from '../../rawEdges.mock';
import { convertEdgesToAdjacencyMatrixGraph } from './adjacency-matrix-storage.utils';

test('convertEdgesToAdjacencyMatrixGraph properly converts Edges into AdjacencyMatrixGraph', () => {
  const graph = convertEdgesToAdjacencyMatrixGraph(indirectConnectedGraphRawEdges);

  expect(graph).toMatchSnapshot();
});
