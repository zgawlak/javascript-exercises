const repeatString = function(string, times) {
    if (times >= 0) {
        let repeatedString = '';
        for (let i = 0; i < times; i++) {
            repeatedString += string;
        }
        return repeatedString;
    }
    else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = repeatString;
