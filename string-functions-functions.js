// 1. Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}

// 2. Count Characters
function countCharacters(str) {
    return str.length;
}

// 3. Capitalize Words
function capitalizeWords(sentence) {
    return sentence.split(' ')
                   .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                   .join(' ');
}
// 4. Find Substring
function findSubstring(str, substring) {
    return str.indexOf(substring);
}   
// 5. Replace Substring
function replaceSubstring(str, oldSubstring, newSubstring) {
    return str.replace(oldSubstring, newSubstring);
}   
// 6. Convert to Uppercase
function convertToUppercase(str) {
    return str.toUpperCase();
}