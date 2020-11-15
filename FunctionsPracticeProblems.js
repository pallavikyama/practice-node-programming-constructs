const prompt = require('prompt-sync')({ sigint: true });

// 1. Help user find degF or degC based on their conversion-selection. Use case-statement and ensure that the inputs are within the freezing-point ( 0 °C / 32 °F ) and the boiling-point of water ( 100 °C / 212 °F )
// 1.a. degF = (degC * 9/5) + 32 
// 1.b. degC = (degF - 32) * 5/9
console.log("\nCelsius and Fahrenheit temperature conversions:\nMake a choice:\n1. °C to °F\n2. °F to °C");
let choice = Number(prompt("Your choice: "));

function degCtoDegF(degC) {
    return (degC * 9 / 5) + 32;
}

function degFtoDegC(degF) {
    return (degF - 32) * 5 / 9;
}

switch (choice) {
    case 1: {
        let degC = Number(prompt("Enter temperature in °C (within 0°C and 100°C) for conversion: "));
        if (degC >= 0 && degC <= 100) {
            let degF = degCtoDegF(degC);
            console.log(`${degC}°C = ${degF}°F`);
        }
        else console.log("Your input must be within 0°C and 100°C.");
        break;
    }
    case 2: {
        let degF = Number(prompt("Enter temperature in °F (within 32°F and 212°F) for conversion: "));
        if (degF >= 32 && degF <= 212) {
            let degC = degFtoDegC(degF);
            console.log(`${degF}°F = ${degC}°C`);
        }
        else console.log("Your input must be within 32°F and 212°F.");
        break;
    }
    default:
        console.log("Invalid choice.");
}

// 2. Write a function to check if the two numbers are palindromes.
console.log("\nCheck if two numbers are palindromes:\nEnter the two numbers:");
let num1 = Number(prompt("num1: "));
let num2 = Number(prompt("num2: "));

function getPalindrome(num) {
    let ans = 0;
    while (num > 0) {
        ans = ans * 10 + num % 10;
        num = parseInt(num / 10);
    }
    return ans;
}

if (getPalindrome(num1) == num2) console.log("The two numbers are palindromes.");
else console.log("The two numbers are not palindromes.");

// 3. Take a number from user and check if the number is a prime then show that its palindrome is also prime. 
// 3.a. Write function check if number is prime.  
// 3.b. Write function to get the palindrome.
// 3.c. Check if the palindrome number is also prime.
console.log("\nTo check if a number is prime and it's palindrome is also prime:");
let number = Number(prompt("Enter a number: "));

function isPrime(num) {
    if (Number.isInteger(num) && num >= 1) {
        if (num == 1) return false;
        for (let i = 2; i <= num / 2; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    } else console.log("Input is not a positive integer.");
}

if (isPrime(number)) console.log("It's a prime number.");
else console.log("It's not a prime number.");

let palNumber = getPalindrome(number);
console.log("Its palindrome is " + palNumber);

if (isPrime(palNumber)) console.log("Its palindrome is a prime number.");
else console.log("Its palindrome is not a prime number.");