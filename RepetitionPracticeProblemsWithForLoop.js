const prompt = require('prompt-sync')({ sigint: true });

// 1. Write a program that takes a command-line argument n and prints a table of the powers of 2 that are less than or equal to 2^n.
console.log("Powers of 2 less than or equal to 2^n are:");
const n1 = Number(prompt("Enter a non-negative integer (i.e. 'n' value): "));
if (n1 >= 0 && Number.isInteger(n1)) {
    for (let i = 0; i <= n1; i++) {
        console.log("2^" + i + " = " + Math.pow(2, i));
    }
} else console.log("Enter only non-negative integers.");

// 2. Write a program that takes a command-line argument n and prints the nth harmonic number.
console.log("\nTo get nth harmonic number:");
const n2 = Number(prompt("Enter a positive integer (i.e. 'n' value): "));
if (n2 >= 1 && Number.isInteger(n2)) {
    let ans = 0;
    for (let i = 1; i <= n2; i++) {
        ans += Math.pow(i, -1);
    }
    console.log("The harmonic number is: " + ans);
} else console.log("Enter only positive integers.");

// 3. Write a program that takes a input and determines if the number is a prime.
console.log("\nTo determine if the number is a prime or not:");
const n3 = Number(prompt("Enter a positive integer: "));
if (n3 >= 1 && Number.isInteger(n3)) {
    let isPrime = true;
    if (n3 == 1) isPrime = false;
    for (let i = 2; i <= n3 / 2; i++) {
        if (n3 % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) console.log(n3 + " is a prime number.");
    else console.log(n3 + " is a non-prime number.");
} else console.log("Enter only positive integers.");

// 4. Extend the program to take a range of numbers as input and output the prime-numbers in that range.
console.log("\nTo determine all prime numbers in a user-given number range:\nEnter only positive integer number-range:");
const low = Number(prompt("Enter lower limit: "));
const high = Number(prompt("Enter higher limit: "));
if (low <= high && low > 0 && Number.isInteger(low) && Number.isInteger(high)) {
    console.log("Prime numbers in this range:");
    for (let i = low; i <= high; i++) {
        let isPrime = true;
        if (i == 1) isPrime = false;
        for (let j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) console.log(i);
    }
} else console.log("Invalid user number-range input.");

// 5. Write a program that computes factorial of a number taken as input.
console.log("\nTo compute factorial of a number:");
const n4 = Number(prompt("Enter a non-negative integer: "));
if (n4 >= 0 && Number.isInteger(n4)) {
    let factorial = 1;
    for (let i = 2; i <= n4; i++) {
        factorial *= i;
    }
    console.log(n4 + "! = " + factorial);
} else console.log("Invalid user input.");

// 6. Write a program to compute factors of a number N using prime factorization method.
console.log("\nTo find the factors of a number(n) using prime factorization:");
let n5 = Number(prompt("Enter a positive integer (i.e. 'n' value): "));
if (n5 >= 1 && Number.isInteger(n5)) {
    console.log("Factors of " + n5 + " are:");
    for (let i = 1; i * i <= n5; i++)
        if (n5 % i == 0) {
            console.log(i);
            if (n5 / i != i)    // prime-factorization
                console.log(n5 / i);
        }
} else console.log("Invalid user input.");