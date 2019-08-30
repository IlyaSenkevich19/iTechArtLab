
export const converter = (function () {

    const converting = str => {
        // const split = str.split('');
        // const string = str.join('');
        if (str.includes(0) && str.includes(1)) {
          return binToDec(str);
        } else {
          return  decToBin(str);
        }
    }

    const binToDec = str => {
        return parseInt(str, 2);
    };

    const decToBin = str => {
        return parseInt(Number(str).toString(2));
    }


    return {
        getNumber: converting
    }
})()

