import { convertEdgesToAdjacencyListGraph, RawEdges } from '../graph-storage';
import { searchGraphComponents } from './search-components';

const disconnectedGraphRawEdges: RawEdges = [
  [0, 5],
  [0, 4],
  [1, 3],
  [3, 2],
  [3, 9],
  [7, 8],
];

test('', () => {
  const graph = convertEdgesToAdjacencyListGraph(disconnectedGraphRawEdges);

  const { graphComponents } = searchGraphComponents(graph);

  expect(graphComponents).toMatchSnapshot();
});
