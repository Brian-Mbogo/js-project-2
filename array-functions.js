// 4. Find Maximum
function findMax(arr) {
    return Math.max(...arr);
}

// 5. Find Minimum
function findMin(arr) {
    return Math.min(...arr);
}

// 6. Sum of Array
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// 7. Filter Array (example: filter numbers greater than a limit)
function filterArray(arr, condition) {
    return arr.filter(condition);
}
// 1. Reverse an Array
function reverseArray(arr) {
    return arr.slice().reverse();
}   
// 2. Sort an Array
function sortArray(arr) {
    return arr.slice().sort((a, b) => a - b);
}   