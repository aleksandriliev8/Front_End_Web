//First solution
function isPalindrome(string) {
    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - i - 1]) {
            return false;
        }
    }

    return true;
}

// Second solution using Array.prototype.reverse(), Array.prototype.join()
function isPalindromeUsingArrayAPI(string) {
    const reversedString = string.split('').reverse().join('');
    return string === reversedString;
}

console.log(isPalindrome('radar')); // true
console.log(isPalindrome('hello')); // false
console.log(isPalindromeUsingArrayAPI('radar')); // true
console.log(isPalindromeUsingArrayAPI('hello')); // false