function isPalindrome(input: string): boolean {
  const normalizedInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  for (let i = 0; i < normalizedInput.length / 2; i++) {
    const leftChar = normalizedInput.at(i);
    const rightChar = normalizedInput.at(-1 * (i + 1));

    if (leftChar !== rightChar) {
      return false;
    }
  }

  return true;
}

export { isPalindrome };
