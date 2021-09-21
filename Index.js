var readlineSync = require('readline-sync');

var getName =  readlineSync.question("May I have your name? ");
console.log("Welcome " + getName + ". Nice to have you here");
var score = 0; //Global variable
var questionOne = "How old am I? "
var userAgeOne = 23; 
var ageOfUser = readlineSync.question(questionOne);
if(ageOfUser<=userAgeOne){
  console.log("you know him well...");
  score = score + 1; 
  console.log(score)
}
else{
  console.log("Oh no!!!!!Try again");
  score = score - 1; 
console.log(score);
}

//question 2
var questionTwo = "Where do I live? "
var userCityTwo = "Hyderabad"; 
var ageOfUser = readlineSync.question(questionTwo);
if(ageOfUser==userCityTwo){
  console.log("you know him well...");
  score = score + 1; 
  console.log(score);
}
else{
  console.log("Oh no!!!!!Try again");
  score = score - 1; 
console.log(score);
}
console.log("________________________________")

if(score== 2){
  console.log("You are his close Friend");
}

// function add(numberOne, numberTwo){
// console.log("num 1: ",numberOne , " and " + " num2: ",numberTwo);
// var sum = numberOne + numberTwo;
// return sum;
// }

// var result = add(2,6);
// console.log("the sum is: " + result );