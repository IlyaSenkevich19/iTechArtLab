class ArrayCalc {
    maxSubSum(arr) {
        let maxSum = 0;
        let everySum = 0;
        for (let element of arr) {
            everySum += element;
            if (everySum < 0) everySum = 0;
            maxSum = Math.max(everySum, maxSum);
        }
        return maxSum;
    }

    maxSubSumSecond(arr) {
        
    }

    minElement(arr) {
        let minElement = 0;
        minElement = Math.min(...arr);
        return minElement;
    }

    maxElement(arr) {
        let maxElement = 0;
        maxElement = Math.max(...arr)
        return maxElement;
    }

    mediumElement(arr) {
        let mediumEl = 0;

        // arr.sort((a, b) => {
        //     console.log(`a = ${a} , b = ${b}`);
        //    let c = a - b;
        //     console.log(c);
        //     return c;
        // })

        let firstPart = Math.floor((arr.length - 1) / 2);
        let secondPart = Math.ceil((arr.length - 1) / 2);
        mediumEl = (arr[firstPart] + arr[secondPart]) / 2;
        return mediumEl;
    }

    selection(arr) {
    //   let maxLength = [];
      let maxLength = arr.filter((a,b) => {
          return (a > b) ? true : false;
      })
      return maxLength;
    }


}

const newCalc = new ArrayCalc();


let input = document.querySelector('input');

let addElementButton = document.querySelector('.addElement');
let maxSubSumButton = document.querySelector('.findMax');
let minButton = document.querySelector('.minEl');
let maxButton = document.querySelector('.maxEl');
let mediumButton = document.querySelector('.mediumEl');
let selectedButton = document.querySelector('.select');

let showArray = document.querySelector('.info');
let showMaxSub = document.querySelector('.show-maxSub');
let showMaxEl = document.querySelector('.show-maxEl');
let showMinEl = document.querySelector('.show-minEl');
let showMediumEl = document.querySelector('.show-mediumEl');
let showSelectedArray = document.querySelector('.show-select');

maxButton.addEventListener('click', () => {
    showMaxEl.innerHTML = newCalc.maxElement(newArr);
})

mediumButton.addEventListener('click', () => {
    showMediumEl.innerHTML = newCalc.mediumElement(newArr);
})

minButton.addEventListener('click', () => {
    showMinEl.innerHTML = newCalc.minElement(newArr);
})

maxSubSumButton.addEventListener('click', () => {
    showMaxSub.innerHTML = newCalc.maxSubSum(newArr);
});

selectedButton.addEventListener('click', () => {
    showSelectedArray.innerHTML = newCalc.selection(newArr);
});

addElementButton.addEventListener('click', () => {
    creatingArr(input.value);
    showArray.innerHTML = newArr;
    input.value = '';
})


const newArr = [];

function creatingArr(element) {
    newArr.push(Number(element));
};






