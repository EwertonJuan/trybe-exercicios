function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('parameters must be numbers');
    }

    return a + b;
}

function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
        if (item !== arr[index]) {
            newArr.push(arr[index]);
        }
    }
    return newArr;
}

function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
}

function encode(string) {
    let encode = '';
    for (let index = 0; index < string.length; index += 1) {
        switch (string[index]) {
            case 'a':
                encode += '1';
                break;
            case 'e':
                encode += '2';
                break;
            case 'i':
                encode += '3';
                break;
            case 'o':
                encode += '4';
                break;
            case 'u':
                encode += '5';
                break;
            default:
                encode += string[index];
                break;
        }
    }
    return encode;
}

function decode(encode) {
    let decode = '';
    for (let index = 0; index < encode.length; index += 1) {
        switch (encode[index]) {
            case '1':
                decode += 'a';
                break;
            case '2':
                decode += 'e';
                break;
            case '3':
                decode += 'i';
                break;
            case '4':
                decode += 'o';
                break;
            case '5':
                decode += 'u';
                break;
            default:
                decode += encode[index];
                break;
        }
    }
    return decode;
}

module.exports = {
    sum,
    myRemove,
    myFizzBuzz,
    encode,
    decode
};