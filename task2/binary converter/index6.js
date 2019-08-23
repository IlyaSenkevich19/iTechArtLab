
const converter = (function () {

    const converting = str => {
        const reg = new RegExp('^[0-1]+$')
        const split = str.split('');
        if (str.includes(reg)) {
            console.log(binToDec(str));
        } else {
            console.log('lol')
            console.log(decToBin(str));
        }
    }

    const binToDec = str => {
        return parseInt((str + '')
            .replace(/[^01]/gi, ''), 2);
    };

    const decToBin = str => {
        return parseInt(str, 2)
    }


    return {
        getNumber: converting
    }
})()

converter.getNumber('101010101011001100');
converter.getNumber(174796);

