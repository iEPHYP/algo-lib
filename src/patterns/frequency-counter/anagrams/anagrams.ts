// O(3N)
export const validAnagram = (word1: string, word2: string): boolean => {
  if (word1.length !== word2.length) {
    return false;
  }

  const word1LettersFrequencyMap = new Map<string, number>();
  const word2LettersFrequencyMap = new Map<string, number>();

  for (let i = 0; i < word1.length; i++) {
    const word1Letter = word1[i];
    const word2Letter = word2[i];

    const word1LetterFrequency = word1LettersFrequencyMap.get(word1Letter) ?? 0;
    const word2LetterFrequency = word2LettersFrequencyMap.get(word2Letter) ?? 0;

    word1LettersFrequencyMap.set(word1Letter, word1LetterFrequency + 1);
    word2LettersFrequencyMap.set(word2Letter, word2LetterFrequency + 1);
  }

  let isAnagram = true;
  word1LettersFrequencyMap.forEach((word1LetterFrequency, letter) => {
    const word2LetterFrequency = word2LettersFrequencyMap.get(letter);

    if (word2LetterFrequency !== word1LetterFrequency) {
      isAnagram = false;
    }
  });

  return isAnagram;
};

// O(2N)
export const aBitFasterValidAnagram: typeof validAnagram = (word1, word2) => {
  if (word1.length !== word2.length) {
    return false;
  }

  const word1LettersFrequencyMap = new Map<string, number>();

  for (let i = 0; i < word1.length; i++) {
    const word1Letter = word1[i];

    const word1LetterFrequency = word1LettersFrequencyMap.get(word1Letter) ?? 0;

    word1LettersFrequencyMap.set(word1Letter, word1LetterFrequency + 1);
  }

  for (let i = 0; i < word2.length; i++) {
    const word2Letter = word2[i];

    const word1LetterFrequency = word1LettersFrequencyMap.get(word2Letter);

    if (!word1LetterFrequency) {
      // letter doesn't exist in word1 or not enough frequent
      return false;
    } else {
      word1LettersFrequencyMap.set(word2Letter, word1LetterFrequency - 1);
    }
  }

  return true;
};
