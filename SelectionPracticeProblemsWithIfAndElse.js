const prompt = require('prompt-sync')({ sigint: true });

// 1. Write a program that reads 5 random 3-digit values and then outputs the minimum and the maximum value.
console.log("\nEnter 5 random 3-digit numbers to find max and min of them:");
const num1 = Number(prompt("num1: "));
const num2 = Number(prompt("num2: "));
const num3 = Number(prompt("num3: "));
const num4 = Number(prompt("num4: "));
const num5 = Number(prompt("num5: "));
let min = +Infinity, max = -Infinity;
if (num1 < min) min = num1;
if (num2 < min) min = num2;
if (num3 < min) min = num3;
if (num4 < min) min = num4;
if (num5 < min) min = num5;
console.log("Minimum value: " + min);
if (num1 > max) max = num1;
if (num2 > max) max = num2;
if (num3 > max) max = num3;
if (num4 > max) max = num4;
if (num5 > max) max = num5;
console.log("Maximum value: " + max);

// 2. Write a program that takes day and month from the command line and prints true if  day of month is between March 20 and June 20, false otherwise.
console.log("\nTo check if day of month given as input by user is between March 20 and June 20:");
const day = prompt("Enter any day of the month: ");
const month = prompt("Enter any month of the year: ");
let check;
if ((month === "March" && day >= 21 && day <= 31) || (month === "April" && day >= 1 && day <= 30)
    || (month === "May" && day >= 1 && day <= 31) || (month === "June" && day >= 1 && day <= 19))
    check = true;
else check = false;
console.log("Day of Month is between March 20 and June 20: " + check);

// 3. Write a program that takes a year as input and outputs the year is a Leap Year or not a Leap Year.
// A Leap Year checks for 4-digit Number, divisible by 4 and not 100 unless divisible by 400.
console.log("\nEnter a 4-digt year to check if Leap Year or not:");
const year = Number(prompt("Enter year: "));
if (year >= 1000 && year <= 9999) {
    if ((year % 4 === 0 && year % 100 != 0) || (year % 400 === 0)) console.log("It's a leap year.");
    else console.log("It's a non-leap year.");
}
else console.log("User-input is not a 4-digit year.");

// 4. Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.
console.log("\nTo check heads or tails for a coin-flip using random function:")
const toss = Math.floor(Math.random() * 10) % 2, Heads = 0;
if (toss === Heads) console.log("It's Heads.");
else console.log("It's Tails.");
