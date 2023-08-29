let number = Math.floor(Math.random() * 100) + 1;    //random number between 1 to 100
let guesses = 0;
let choice = 0;

do {
  choice = prompt("Enter the number you guess between 1 to 100");
  if (choice < number) {
    console.log("The number is higher")
    guesses++;
  }
  else if (choice > number) {
    console.log("The number is lower")
    guesses++;
  }
} while (choice != number);

let score = 100 - guesses;
console.log("You guessed the correct number. \nThe number is " + number + " and your score is " + score + ".");