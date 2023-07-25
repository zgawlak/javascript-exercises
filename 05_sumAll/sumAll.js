const sumAll = function(num1, num2) {
    if (typeof(num1) !== 'number' || typeof(num2) !== 'number' || num1 < 0 || num2 < 0) return 'ERROR';

    if (num1 > num2){
        temp = num1;
        num1 = num2;
        num2 = temp;
    }

    let sum = 0;
    for (num1; num1 <= num2; num1++){
        sum += num1;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
