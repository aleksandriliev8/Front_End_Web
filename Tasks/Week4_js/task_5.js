function isPrime(number)
{
    if(number < 2)
        return false;

    for (let i = 2; i < number; i++)
    {
        if(number % i === 0)
            return false;
    }

    return true;
}

function filterPrimes(array)
{
    return array.filter(isPrime);
}

const array = [2, 3, 4, 5, 10, 11, 13, 15];
console.log(filterPrimes(array))