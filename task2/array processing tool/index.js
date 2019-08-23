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
        let maxLength = arr.filter((a, b) => {
            return (a > b) ? true : false;
        })
        return maxLength;
    }


}

const newCalc = new ArrayCalc();


const cache = (key, value) => {
    if (typeof value == 'undefined') {
        return cache[key];
    }
    cache[key] = value;
}

const findElement = selector => {
    if (!cache(selector)) {
        cache(selector, document.querySelector(selector));
    }
    return cache(selector);
}

let input = findElement('input');

let addElementButton = findElement('.addElement');
let maxSubSumButton = findElement('.findMax');
let minButton = findElement('.minEl');
let maxButton = findElement('.maxEl');
let mediumButton = findElement('.mediumEl');
let selectedButton = findElement('.select');

let showArray = findElement('.info');
let showMaxSub = findElement('.show-maxSub');
let showMaxEl = findElement('.show-maxEl');
let showMinEl = findElement('.show-minEl');
let showMediumEl = findElement('.show-mediumEl');
let showSelectedArray = findElement('.show-select');

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







