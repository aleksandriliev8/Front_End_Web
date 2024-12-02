//First solution
function extractUniqueValues(array)
{
    let result = [];

    for(element of array)
    {
        if (!result.includes(element))
        {
            result.push(element);
        }
    }

    return result;
}

//Second solution
function uniqueNumbers(array) {
    return array.filter((element, index) => array.indexOf(element) === index);
}

const array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
console.log(uniqueNumbers(array)); // [1, 2, 3, 4, 5]