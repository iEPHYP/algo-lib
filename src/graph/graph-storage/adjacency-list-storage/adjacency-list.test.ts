import { indirectConnectedGraphRawEdges } from '../../rawEdges.mock';
import { convertEdgesToAdjacencyListGraph } from './adjacency-list.utils';

test('convertEdgesToAdjacencyListGraph properly converts Edges to AdjacencyListGraph', () => {
  const graph = convertEdgesToAdjacencyListGraph(indirectConnectedGraphRawEdges);

  expect(graph).toMatchSnapshot();
});
