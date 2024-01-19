# Map Letters in a String

## Instructions

Given a word, create an object that stores the indexes of each letter in an array.

- Make sure the letters are the keys.
- Make sure the letters are symbols.
- Make sure the indexes are stored in an array and those arrays are values.

## Examples

```
mapLetters("dodo") ➞ { d: [0, 2], o: [1, 3] }
mapLetters("froggy") ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
mapLetters("grapes") ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }
```

## Constraints

- All strings given will be lowercase.

## Acceptance Criteria

- Given a string input, a non-empty object with each letter and its indices as values must be returned.
- The output object must have symbols as its keys, arrays as its values.
- The function must correctly handle edge cases like when the input string contains only one character or no repeating characters.
