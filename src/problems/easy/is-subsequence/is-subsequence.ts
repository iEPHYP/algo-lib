function isSubsequence(subsequence: string, sequence: string): boolean {
  let notFoundCharPointer = 0;

  for (const sequenceChar of sequence) {
    const notFoundChar = subsequence[notFoundCharPointer];
    if (sequenceChar === notFoundChar) {
      notFoundCharPointer++;
    }
  }

  return notFoundCharPointer >= subsequence.length;
}

export { isSubsequence };
