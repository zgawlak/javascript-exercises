const reverseString = function (string) {
    let stringArray = [];
    for (let i = 0; i < string.length; i++) {
        stringArray.push(string.charAt(i));
    }
    let reversedArray = stringArray.reverse();
    return reversedArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
