function isAnagram(firstWord, secondWord) {
    // Convertir palabras en minúscula para evitar problemas con mayúsculas
    let lowercaseFirstWord = firstWord.toLowerCase()
    let lowercaseSecondWord = secondWord.toLowerCase()

    // Dos palabras exactamente iguales no son anagrama
    if (lowercaseFirstWord === lowercaseSecondWord) return false

    // Si ambas no tienen la misma longitud, no son anagrama
    let lengthLowercaseFirstWord = lowercaseFirstWord.length
    let lengthLowercaseSecondWord = lowercaseSecondWord.length
    if (lengthLowercaseFirstWord !== lengthLowercaseSecondWord) return false

    // No son iguales y tienen la misma longitud
    // Recorrer primera palabra y comprobar que todas sus letras están en la segunda palabra
    for (let letter of lowercaseFirstWord) {
        if (!lowercaseSecondWord.includes(letter)) return false
    }

    return true
}

let firstWord = 'Formula'
let secondWord = 'ulamorf'
let anagram = isAnagram(firstWord, secondWord)

console.log(`¿Las palabras ${firstWord} y ${secondWord} son anagramas?: ${anagram}`)