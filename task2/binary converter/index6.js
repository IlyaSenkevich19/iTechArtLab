
const converter = (function () {

    const converting = str => {
        // const split = str.split('');
        const string = str.join('');
        if (str.includes(0) && str.includes(1)) {
          return binToDec(string);
        } else {
          return  decToBin(string);
        }
    }

    const binToDec = str => {
        // return parseInt((str + '').replace(/[^01]/gi, ''), 2);
        return parseInt(str, 2);
    };

    const decToBin = str => {
        return parseInt(Number(str).toString(2));
    }


    return {
        getNumber: converting
    }
})()

console.log(converter.getNumber([1,1,1,1,1,0,0,0,1,1,0,1]));
console.log(converter.getNumber([6,5,4]));
