function findMedian(arr) {
    const sortedArr = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(sortedArr.length / 2);

    return sortedArr.length % 2 !== 0 ? sortedArr[mid] : (sortedArr[mid - 1] + sortedArr[mid]) / 2;
}

console.log(findMedian([10, 2, 14, 4, 7, 6]));

function findMostDigits(arr, n) {
return [...arr].sort((a, b) => a.toString -b.toString).slice(0, n);
}

console.log(findMostDigits([1000, 200, 14, 4, 7, 6], 2));

function findDivisibleByX(arr, x) {
 return arr.filter((num) => num % x === 0)
}

console.log(findDivisibleByX([1000, 200, 14, 4, 7, 6], 2));


//! 1 Find the first n prime numbers in an array.
function findthreeLargestNumbers(arr) {
    return arr.sort((a, b) => a - b).slice(0,3);
}

console.log(findthreeLargestNumbers([1000, 200, 14, 400, 7, 6]));

//! 2 Find the first n prime numbers in an array.
function findthreedabeuletNumbers(arr) {
    return arr
    .sort((a, b) => a - b)
    .filter((num) => num % 3 === 0)
    .slice(0,3);
}

console.log(findthreedabeuletNumbers([1000, 600, 16, 900, 9, 6]));



//! 3  Find numbers in an array that end with 5.
function findNumbersEndWith5(arr) {
    return arr
    .filter((num) => num
    .toString()
    .endsWith('5'));
}

console.log(findNumbersEndWith5([1005, 605, 16, 900, 9, 6]));

//! 4. Find all perfect squares in an array.

function findPerfectSquares(arr) {
    return arr
        .filter(num => Math.sqrt(num) % 1 === 0)
        .map(num => ({ number: num, squareRoot: Math.sqrt(num) }));
}

console.log(findPerfectSquares([100, 605, 16, 900, 9, 6]));

//! 5. Find numbers in an array whose sum of digits is even.
function findNumbersWithEvenSumOfDigits(arr) {
    return arr
        .filter(num => [...num.toString()]
            .reduce((acc, curr) => acc + parseInt(curr), 0) % 2 === 0);
}   

console.log(findNumbersWithEvenSumOfDigits([100, 605, 16, 900, 9, 6]));

//! 6. Find all numbers that contain the digit 7.

function findNumberscon5(arr) {
    return arr
    .filter((num) => num
    .toString()
    .includes('7'));
}

console.log(findNumberscon5([17805, 605, 17, 900, 9, 6]));

//! 7. Find numbers that are greater than the average of the array.

function findNumbersGreaterThanAverage(arr) {
    const average = arr.reduce((   acc, curr) => acc + curr, 0) / arr.length;
    return arr.filter(num => num>average)
}
console.log(findNumbersGreaterThanAverage([100, 605, 16, 900, 9, 6]));

//! 8. Find the first n numbers that are NOT divisible by 2 or 3.

function findNumbersNotDivisibleBy2Or3(arr, n) {
    return arr
        .sort((a, b) => a - b) 
        .filter(num => num % 2 !== 0 && num % 3 !== 0) 
        // .slice(0, n);
}

console.log(findNumbersNotDivisibleBy2Or3([100, 605, 16, 900, 9, 2, 5, 6], 3));

//! 9.Find all numbers that are **palindromes**.

function findPalindromes(arr) {
    return arr.filter(num => {
        let strNum = num.toString();
        return strNum === strNum.split('').reverse().join('');
    });
}

console.log(findPalindromes([121, 234, 909, 456, 787, 1001, 99, 12]));

//! Reverse an array without using .reverse() method.

function reverseArray(arr) {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5]))

//! 11. Find the sum of all numbers in an array.

function findSum(arr) {
 return arr.reduce((acc,curr) => acc + curr ,0)
}

console.log(findSum([1, 2, 3, 4, 5]));

//! 12. Find the maximum value in an array.

function findMax(arr) {
    return arr.reduce((max,curr) => max > curr ? max : curr,0)
}

console.log(findMax([1, 2, 6, 4, 5]));

//! 13. Find the minimum value in an array.

function findMin(arr) {
    return arr.reduce((min,curr) => min < curr ? min : curr,Infinity)
}

console.log(findMin([7, 2, 6, 4, 5]));

//! 14. Check if a number is present in an array.

function isNumberPresent(arr, num) {
    return arr.includes(num);
}

console.log(isNumberPresent([7, '3', 6, 4, 5], 6));

//! 15. Find the average of all numbers in an array.

function averageArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
}

console.log(averageArray([1, 2, 3]));
