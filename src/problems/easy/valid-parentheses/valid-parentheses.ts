export function isValid(bracketsExpression: string): boolean {
  const bracketsSequence = bracketsExpression.split('');

  const stack = [];
  for (const bracket of bracketsSequence) {
    if (isOpenBracket(bracket)) {
      stack.push(bracket);
    } else {
      const lastStackBracket = stack[stack.length - 1];
      if (lastStackBracket === openingBracketPair[bracket]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return !stack.length;
}

const openBrackets = '([{';

const isOpenBracket = (bracket: string) => {
  return openBrackets.includes(bracket);
};

const openingBracketPair: { [ClosingBracketKey: string]: string } = {
  ')': '(',
  ']': '[',
  '}': '{',
};
