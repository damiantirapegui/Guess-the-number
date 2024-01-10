let secretNumber = Math.floor(Math.random() * 100) + 1;

while (true) {
  let guess = prompt("Guess a number between 1-100");
  guess = parseInt(guess);

  if (guess === secretNumber) {
    console.log("Congrats! You have guessed the right number");

    break;
  } else if (guess > secretNumber) {
    console.log("Wrong, guess lower.");
  } else {
    console.log("Wrong, guess higher.");
  }
}
