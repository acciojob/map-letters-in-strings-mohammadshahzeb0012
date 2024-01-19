//your JS code here. If required.
function mapLetters(word) {
    // Convert the string into an array of characters
    const lettersArray = word.split('');

    // Use the map method to create an object with letters as keys and arrays of indices as values
    const result = {};
    lettersArray.map((letter, index) => {
        // Check if the letter is already a key in the result object
        if (result.hasOwnProperty(letter)) {
            // If yes, push the current index to the existing array
            result[letter].push(index);
        } else {
            // If no, create a new array with the current index as its first element
            result[letter] = [index];
        }
    });

    return result;
}

// Test cases
console.log(mapLetters("dodo"));    // Output: { d: [0, 2], o: [1, 3] }
console.log(mapLetters("froggy"));  // Output: { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
console.log(mapLetters("grapes"));  // Output: { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }
