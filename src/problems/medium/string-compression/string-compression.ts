function compress(chars: string[]): number {
  let compressedLength = 0;

  let compressingChar = chars.at(0);
  let compressingCharCount = 0;

  for (let i = 0; i <= chars.length; i++) {
    const currentChar = chars.at(i);

    if (currentChar === compressingChar) {
      compressingCharCount++;
    } else {
      const charCountLength = compressingCharCount.toString().length;
      const countLength = compressingCharCount > 1 ? charCountLength : 0;

      compressedLength += 1 + countLength;
      compressingChar = currentChar;
      compressingCharCount = 1;
    }
  }

  return compressedLength;
}

export { compress };
