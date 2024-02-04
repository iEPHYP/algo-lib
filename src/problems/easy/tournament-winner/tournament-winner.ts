function findTournamentWinner(competitions: [string, string][], results: (0 | 1)[]): string {
  const teams: { [TeamName: string]: number } = {};

  competitions.forEach((competition, index) => {
    const [homeTeamName, awayTeamName] = competition;
    const homeTeamWon = !!results[index];

    const winnerTeamName = homeTeamWon ? homeTeamName : awayTeamName;
    teams[winnerTeamName] = (teams[winnerTeamName] ?? 0) + 3;
  });

  const winner = Object.entries(teams).reduce(
    (previousWinner, [teamName, teamPoints]) => {
      const [, previousWinnerPoints] = previousWinner;

      return previousWinnerPoints < teamPoints ? [teamName, teamPoints] : previousWinner;
    },
    ['', 0]
  );

  return winner[0];
}

export { findTournamentWinner };
