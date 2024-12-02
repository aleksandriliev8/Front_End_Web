function sumArrayElementsUsingArrayAPI(array)
{
    return array.flat(Infinity).reduce((acc, curr) => acc + curr, 0);
}

console.log(sumArrayElementsUsingArrayAPI([1, [2, [3, 4]], 5])); // 15