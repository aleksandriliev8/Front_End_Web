function getKeys(object)
{
    const result = [];

    for(let key in object)
    {
        result.push(key);
    }

    return result;
}

const object = { name: "John", age: 30, city: "New York" };
console.log(getKeys(object));