import { convertEdgesToAdjacencyListGraph, RawEdges } from '../graph-storage';
import { findMinimumDistances } from './find-minimum-distance';

const rawEdges: RawEdges = [
  [0, 1],
  [0, 2],
  [1, 6],
  [1, 3],
  [2, 3],
  [3, 6],
  [3, 5],
  [3, 4],
  [6, 7],
  [5, 7],
  [4, 7],
  [7, 8],
];

test('findMinimumDistances works correctly from the 0 index vertex', () => {
  const graph = convertEdgesToAdjacencyListGraph(rawEdges);

  const { distancesMap } = findMinimumDistances(graph, 0);

  expect(distancesMap).toMatchSnapshot('0 index vertex');
});

test('findMinimumDistances works correctly from the 3 index vertex', () => {
  const graph = convertEdgesToAdjacencyListGraph(rawEdges);

  const { distancesMap } = findMinimumDistances(graph, 3);

  expect(distancesMap).toMatchSnapshot('3 index vertex');
});

test('findMinimumDistances works correctly from the 7 index vertex', () => {
  const graph = convertEdgesToAdjacencyListGraph(rawEdges);

  const { distancesMap } = findMinimumDistances(graph, 7);

  expect(distancesMap).toMatchSnapshot('7 index vertex');
});
