import { RawEdges } from './edges-storage.types';

export const getNormalizedEdges = (rawEdges: RawEdges) =>
  rawEdges.map(([vertexOutIndex, vertexInIndex]) => ({
    vertexOutIndex,
    vertexInIndex,
  }));
