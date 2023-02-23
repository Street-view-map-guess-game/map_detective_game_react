export const setScore = (distance) => {
  const maxscore = 10000;
  var distance = (distance / 1000).toFixed(5);

  var score = (10000 / distance).toFixed(5);
  return score;
};
