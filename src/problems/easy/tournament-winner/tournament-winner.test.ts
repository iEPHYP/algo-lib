import { findTournamentWinner } from './tournament-winner';

describe(findTournamentWinner, () => {
  it('works properly', () => {
    expect(findTournamentWinner([['html', 'c#']], [0])).toBe('c#');
    expect(findTournamentWinner([['html', 'c#']], [1])).toBe('html');
    expect(findTournamentWinner([['python', 'html']], [1])).toBe('python');
    expect(
      findTournamentWinner(
        [
          ['html', 'c#'],
          ['c#', 'python'],
          ['python', 'html'],
        ],
        [0, 0, 1]
      )
    ).toBe('python');
    expect(
      findTournamentWinner(
        [
          ['html', 'c#'],
          ['js', 'c#'],
          ['python', 'html'],
          ['js', 'html'],
          ['c#', 'python'],
          ['python', 'js'],
        ],
        [0, 1, 1, 0, 0, 1]
      )
    ).toBe('python');
  });
});
