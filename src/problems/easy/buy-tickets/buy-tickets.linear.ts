export function timeRequiredToBuy(clientsTickets: number[], targetClientIndex: number): number {
  const targetClientTickets = clientsTickets[targetClientIndex];

  const totalTimeSpend = clientsTickets.reduce((previousTimeCount, clientTickets, clientIndex) => {
    return (
      previousTimeCount +
      (clientIndex <= targetClientIndex
        ? Math.min(clientTickets, targetClientTickets)
        : Math.min(clientTickets, targetClientTickets - 1))
    );
  }, 0);

  return totalTimeSpend;
}
