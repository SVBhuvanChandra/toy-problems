function countBs(word) {
    var counter = 0
    for (let i = 0; i < word.length; i++) {
        if (word[i] === "B") {
            counter++
        }
    }
    return counter
}

function countChar(word, character) {
    var counter = 0
    for(let j = 0; j < word.length; j++){
        if (word[j] === character) {
            counter++
        }
    }
    return counter
}

var checkWord = "BbBbBbBbbbBBBBbBbbBBBbBbBBbBBBb"
var checkChar = "b"

const BCount = countBs(checkWord)
const bCount = countChar(checkWord, checkChar)

console.log("Count of B's in " + checkWord + " is : " + BCount)
console.log("Count of b's in " + checkWord + " is : " + bCount)
