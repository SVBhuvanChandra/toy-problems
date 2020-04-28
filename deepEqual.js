function isPresent(keysObj2, key1) {
    for (let j = 0; j < keysObj2.length; j++) {
        if (keysObj2[j] === key1) {
            return keysObj2[j]
        }
    }
    return null
}

function deepEqual(object1, object2) {
    if (object1 === null && object2 === null) {
        return true
    } else if ((object1 === null && object2 != null) || (object1 != null && object2 === null)) {
        return false
    } else {
        if (typeof object1 != "object" && typeof object2 != "object") {
            if (typeof object1 === typeof object2) {
                if (object1 === object2) {
                    return true
                } else {
                    return false
                }
            } else {
                return false
            }
        } else if (typeof object1 === "object" && typeof object2 === "object"){
            const keysObj1 = Object.keys(object1)
            const keysObj2 = Object.keys(object2)

            if (keysObj1.length != keysObj2.length){
                return false
            } else {
                for (let i = 0; i < keysObj1.length; i++){
                    const key1 = keysObj1[i]
                    const key2 = isPresent(keysObj2, key1)
                    if (key2 === null) {
                        return false
                    } else {
                        if (typeof key1 === typeof key2) {
                            if (!(deepEqual(object1[key1], object2[key2]))) {
                                return false
                            }        
                        }
                    }
                }
                return true
            }
        } else {
            return false
        }
    }   
}

const word1 = "BHUVAN"
const word2 = "BHUVAN"
const word3 = "ANILCHANDRA"
const word4 = "ANIL"

const testObj1 = {
    name: "bhuvan",
    roll: 19, 
    clz: {
        dept : "MSIT",
    }
}

const testObj2 = {
    roll: 19,
    name: "bhuvan",
    clz: {
        dept: "MSIT",
    }
}

console.log(deepEqual(word1, word2))
console.log(deepEqual(word3, word4))
console.log(deepEqual(word1, testObj1))
console.log(deepEqual(testObj2, testObj1))