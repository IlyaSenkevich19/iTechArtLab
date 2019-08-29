
const converter = (function () {

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

// console.log(converter.getNumber([1,1,1,1,1,0,0,0,1,1,0,1]));
// console.log(converter.getNumber([6,5,4]));

const inputNumber = document.querySelector('.number');

const showResultNum = document.querySelector('.result');

inputNumber.addEventListener('keyup', (e)=>{
    if(e.keyCode === 13) {
        showResultNum.innerHTML = converter.getNumber(inputNumber.value);
    }
})