function isAnagram(firstWord, secondWord) {
    // Convert words to lowercase to avoid problems with uppercase
    let lowercaseFirstWord = firstWord.toLowerCase()
    let lowercaseSecondWord = secondWord.toLowerCase()

    // Two equal words are not anagram
    if (lowercaseFirstWord === lowercaseSecondWord) return false

    // Sort letters of both words and compare them
    let sortedLowercaseFirstWord = sortLettersFromWord(lowercaseFirstWord)
    let sortedLowercaseSecondWord = sortLettersFromWord(lowercaseSecondWord)

    return sortedLowercaseFirstWord === sortedLowercaseSecondWord
        
}

function sortLettersFromWord(word) {
    let sortedArrayOfLetters = getArrayOfLetters(word).sort()

    // Convert to String
    let sortedArrayOfLetters_String = sortedArrayOfLetters.toString()

    // Remove ',' from the converted Array
    return sortedArrayOfLetters_String.replaceAll(',', '')
}

function getArrayOfLetters(word) {
    return word.split('')
}

let firstWord = 'Formula'
let secondWord = 'furmola'
let anagram = isAnagram(firstWord, secondWord)

console.log(`¿Las palabras ${firstWord} y ${secondWord} son anagramas?: ${anagram}`)