import { indirectConnectedGraphRawEdges } from '../../rawEdges.mock';
import { getNormalizedEdges } from './edges-storage.utils';

test('getNormalizedEdges properly converts Raw Edges into Normalized Edges', () => {
  const normalizedEdges = getNormalizedEdges(indirectConnectedGraphRawEdges);

  expect(normalizedEdges).toMatchSnapshot();
});
