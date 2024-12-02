// First solution
function printArray(array) {
    let result = [];

    for (let element of array) {
        if (Array.isArray(element)) {
            result.push(...printArray(element));
        } else {
            result.push(element);
        }
    }

    return result;
}

// Second solution using Array.prototype.flat()
function printArrayFlatUsingArrayAPI(array) {
    return array.flat(Infinity);
}

console.log(printArray([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(printArray([1, [2, [3, 4]], 5])); // [1, 2, 3, 4, 5]
console.log(printArrayFlatUsingArrayAPI([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(printArrayFlatUsingArrayAPI([1, [2, [3, 4]], 5])); // [1, 2, 3, 4, 5]