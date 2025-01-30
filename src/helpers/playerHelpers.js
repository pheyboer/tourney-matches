export const preparePlayerData = (playerData) => {
  return Object.values(playerData);
};

export const addWinsToPlayers = (playerDataArray, matchData) => {
  return playerDataArray.map((player) => {
    //calculate the number of wins in matchData
    const currentWins = matchData.reduce((acc, match) => {
      //add a win if the gamerTag matches
      if (match.winner === player.gamerTag) {
        return (acc += 1);
      } else {
        return acc;
      }
    }, 0);

    //assigns the value to the wins key --- needed a return here
    return {
      ...player,
      wins: currentWins,
    };
  });
};
