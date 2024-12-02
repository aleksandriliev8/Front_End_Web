function reverseString(array)
{
    return array.map(word => {
        let reversed = word.split('').reverse().join('');

        if(word.length > 5)
            reversed = reversed.toUpperCase();

        return reversed;
    });
}

console.log(reverseString(["hello", "world", "JavaScript", "fun"])); // ["olleh", "dlrow", "tpircSavaJ", "nuf"]