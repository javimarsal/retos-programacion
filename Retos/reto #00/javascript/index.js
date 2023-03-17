let minSequenceNumber = 1
let maxSequenceNumber = 100

let numberThree = 3
let numberFive = 5

let isMultipleOf = function (dividend, divisor) {
    return dividend % divisor == 0
}

for (let numberOfSequence = minSequenceNumber; numberOfSequence <= maxSequenceNumber; numberOfSequence++) {
    if (isMultipleOf(numberOfSequence, numberThree) && isMultipleOf(numberOfSequence, numberFive))
        console.log("fizzbuzz")

    else if (isMultipleOf(numberOfSequence, numberThree)) 
        console.log("fizz")

    else if (isMultipleOf(numberOfSequence, numberFive))
        console.log("buzz")

    else console.log(numberOfSequence)
}