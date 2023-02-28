export const setScore = (distance) => {

  const MAX_SCORE = 10000;
  let score = 0;
  console.log(distance)

  if (distance <= 355) {
    score = -(Math.pow(distance, 2) / 20) + 10000;
  }
  else if (distance > 355 && distance <= 660) {
    score = -(Math.pow(distance, 2) / 100) + 5000;
  }
  else if (distance > 660 && distance <= 800) {
    score = -(Math.pow(distance, 2) / 500) + 1500;
  }
  else if (distance > 800) {
    score = -(Math.pow(distance, 2) / 500000) + 250;
  }
  if (score <= 0) {
    score = 10;
  }

  return score;

};