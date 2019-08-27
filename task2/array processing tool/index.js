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
        let maxSum = 0;
        let everySum = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = i; i < arr.length; j++) {
                everySum += arr[j];
                maxSum = Math.max(maxSum, everySum);
            }
        }
        return maxSum;
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
        arr.sort((a, b) =>a - b);
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

const addElementButton = findElement('.addElement');
const maxSubSumButton = findElement('.findMax');
const maxSubSumButton2 = findElement('.findMax2');
const minButton = findElement('.minEl');
const maxButton = findElement('.maxEl');
const mediumButton = findElement('.mediumEl');
const selectedButton = findElement('.select');

const showArray = findElement('.info');
const showMaxSub = findElement('.show-maxSub');
const showMaxSub2 = findElement('.show-maxSub2');
const showMaxEl = findElement('.show-maxEl');
const showMinEl = findElement('.show-minEl');
const showMediumEl = findElement('.show-mediumEl');
const showSelectedArray = findElement('.show-select');

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

maxSubSumButton2.addEventListener('click', () => {
    showMaxSub2.innerHTML = newCalc.maxSubSumSecond(newArr);
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







