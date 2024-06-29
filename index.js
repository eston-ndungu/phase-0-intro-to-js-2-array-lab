// Write your solution here!

// Create an Array and assign it initial values
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
    cats.push("Ralph") // The value of cats will be changed to: [Milo, "Otis" "Garfield, "Ralph"]
    console.log("cats;", name)  
    
}
//Add element to the beginning of the cats array
function destructivelyPrependCat(name) {
cats.unshift("Bob") // The value of cats wiil be changed to : ["Bob", "Milo", "Otis", "Garfield"]
console.log("cats;", name)
}

// Remove last element from an array
function destructivelyRemoveLastCat() {
    cats.pop() // Does not take any argument
}

// Remove first element  from an array
function destructivelyRemoveFirstCat() {
    cats.shift() // Does not take any argument
}

// Add an element to the end of an array returniing a new array but leaves the initial array unchanged
function appendCat(name) {
    const copyOfCats = [...cats] // Creates a copy of the cats array using spread operator [...]
    copyOfCats.push("Broom") // Adds new cat at the end of the array
    return copyOfCats // Return new array [copyOfCats] leaving the [cats] array unchanged
   
}

//Add an element to the beginning of an array,
function prependCat(name) {
    let copyOfCats = [...cats] // Creates a copy of the array
    copyOfCats.unshift("Arnold") // Adds new cat at the beginning of the array
    return copyOfCats
}

// Remove last element, returning new array and leaving initial array unchanged
function removeLastCat() {
    const newCats = [...cats]
    newCats.pop() // Removes last cat from the array
    return newCats
}

//Remove first element from array, leaving initial array unchanged
function removeFirstCat() {
    let newCats = [...cats]
    newCats.shift() // Remove first cat from the array
    return newCats
}