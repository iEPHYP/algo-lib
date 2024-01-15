import { convertEdgesToAdjacencyListGraph, RawEdges } from '../graph-storage';
import { findGraphComponents } from './find-components';

const disconnectedGraphRawEdges: RawEdges = [
  [0, 5],
  [0, 4],
  [1, 3],
  [3, 2],
  [3, 9],
  [7, 8],
];

test('findGraphComponents finds components correctly', () => {
  const graph = convertEdgesToAdjacencyListGraph(disconnectedGraphRawEdges);

  const { graphComponents } = findGraphComponents(graph);

  expect(graphComponents).toMatchSnapshot();
});
