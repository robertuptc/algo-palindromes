exports.palindrome = function(word) {
    originalWord = word.toString().toLowerCase().replace(/[^a-zA-z0-9]/g, "").split('').join('')
    reversedWord = word.toString().split('').reverse().join('').toLowerCase().replace(/[^a-zA-z0-9]/g, "")

    return originalWord == reversedWord ? true : false
};




