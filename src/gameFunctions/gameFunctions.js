export const setScore = (distance) => {
  var score = (50000 / distance).toFixed(2);
  return score;
};
