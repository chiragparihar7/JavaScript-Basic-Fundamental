// Nasted If else 

let winningNumber = 22;
let guessNumber = +prompt("Chooes a Number");
// console.log(typeof guessNumber, guessNumber);

if(winningNumber === guessNumber){
    console.log("You are right!!");
}else {
    if(guessNumber > winningNumber){
        console.log("You are too high")
    } else {
        console.log("You are low")
    }
}

