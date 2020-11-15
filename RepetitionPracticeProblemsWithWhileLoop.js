const prompt = require('prompt-sync')({ sigint: true });

// 1. Write a program that takes a command-line argument N and prints a table of the powers of 2 that are less than or equal to 2^n till 256 is  reached.
console.log("Powers of 2 less than or equal to 2^n or till 256 are:");
const n1 = Number(prompt("Enter a non-negative integer (i.e. 'n' value): "));
if (n1 >= 0 && Number.isInteger(n1)) {
    let i = -1, ans = 0;
    while (++i <= n1 && ans < 256) {
        ans = Math.pow(2, i);
        console.log("2^" + i + " = " + ans);
    }
} else console.log("Enter only non-negative integers.");

// 2. Find the magic number:
// 2.a. Ask the user to think of a number n between 1 to 100.
// 2.b. Then check with the user if the number is less then n/2 or greater.
// 2.c. Repeat till the magic number is reached.
let low = 1, high = 100, n, p, x;
console.log("\nThink of an integer between 1 to 100 in your mind (call it magic number(n)).");
while (low != high) {
    p = parseInt(low + high);
    if (p % 2 == 0) n = p / 2;
    else n = (p - 1) / 2;
    console.log("Make a choice.\n1. Your choice is equal to " + n + "\n2. Your choice is less than " + n + "\n3. Your choice is greater than " + n);
    x = Number(prompt("Enter your choice: "));
    switch (x) {
        case 1: {
            console.log("The magic number is " + n + " !");
            low = high = n;
            break;
        }
        case 2: {
            high = n;
            p = parseInt(low + high);
            if (p % 2 == 0) n = p / 2;
            else n = (p - 1) / 2;
            break;
        }
        case 3: {
            low = n;
            p = parseInt(low + high);
            if (p % 2 == 0) n = p / 2;
            else n = (p - 1) / 2;
            break;
        }
        default: console.log("Invalid choice!");
    }
}

// 3. Extend the flip-coin problem till either heads or tails wins 11 times.
let heads = 0, tails = 0, toss;
console.log("\nSimulating coin-flip:");
while (heads < 11 && tails < 11) {
    toss = Math.floor(Math.random() * 10) % 2;
    if (toss == 0) ++heads;
    else ++tails;
    console.log(`Heads: ${heads}  Tails: ${tails}`);
}
if (heads == 11) console.log("Heads wins!");
else console.log("Tails wins!");

// 4. Write a program where a gambler starts with Rs 100 and places Re 1 bet until he/she goes broke i.e. no more money to gamble or reaches the goal of Rs 200. Keep track of number of times won and number of bets made.
let balance = 100, winCount = 0, betCount = 0, play, choice = 1;
while (choice == 1) {
    balance = 100;
    console.log(`\nGambling:\nStarted with balance = ${balance}   number_of_wins = ${winCount}`);
    while (balance > 0 && balance < 200) {
        play = Math.floor(Math.random() * 10) % 2;
        ++betCount;
        if (play == 0) --balance;
        else ++balance;
    }
    if (balance == 200) {
        console.log("Gambler won.");
        ++winCount;
    } else console.log("Gambler lost.");
    console.log(`Game result: number_of_bets = ${betCount}   number_of_wins = ${winCount}\nMake a choice:\n1. Start a new game\nPress any other key to exit game.`);
    choice = Number(prompt("Your choice: "));
}