'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
    // Write your code here
    const nums = new Set()
    a.forEach(num => nums.has(num) ? nums.delete(num) : nums.add(num));
    console.log(nums)
    return (Array.from(nums))[0];
}

// Sumana's
// function lonelyinteger(a) {
//     const intSet = new Set();
//     a.forEach(int => intSet.has(int) ? intSet.delete(int) : intSet.add(int));
//     const [lonelyInt, ...rest] = intSet; // "rest" isn't needed but keeping for future syntax reference
//     console.log(rest)
//     return lonelyInt;
// }


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = lonelyinteger(a);

    ws.write(result + '\n');

    ws.end();
}
