import { ArrayCalc } from './modules/arrayProcessingTool.js';
import { sortArray } from './modules/arraySorter.js';
import { converter } from './modules/binaryConverter.js';
import { cachingCalc } from './modules/cachingCalculator.js';
import { DateFormatter } from './modules/dateDisplayFormatter.js';
import { StringCalc } from './modules/stringCalculator.js';
import { getText } from './modules/textFormatter.js';


//ArrayProccessingTool

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

//arraySorter

const array = [1, -2, 4, 3, 9, -6];

console.log(sortArray.bubble(array));
console.log(sortArray.simple(array));
console.log(sortArray.quick(array));
console.log(sortArray.selection(array));


const parser = (value) => {
    const newValue = value.split(' ');
    return newValue;
}



const inputArr = document.querySelector('.newArray');
const arr = document.querySelector('.info');

const btnBubble = document.querySelector('.bubbleSort');

btnBubble.addEventListener('click', () => {
        console.log(inputArr.value)
        arr.innerHTML =  parser(inputArr.value);
})

//binaryConverter

// console.log(converter.getNumber([1,1,1,1,1,0,0,0,1,1,0,1]));
// console.log(converter.getNumber([6,5,4]));

const inputNumber = document.querySelector('.number');

const showResultNum = document.querySelector('.result');

inputNumber.addEventListener('keyup', (e)=>{
    if(e.keyCode === 13) {
        showResultNum.innerHTML = converter.getNumber(inputNumber.value);
    }
})

//cachingCalculator



//dateDisplayFormatter

const dateFormatter = new DateFormatter();


const shortDate = document.querySelector('.shortDate');
const longDate = document.querySelector('.longDate');
const reverseDate = document.querySelector('.reverseDate');
const secondRevDate = document.querySelector('.secondRevDate');
const dateFromNow = document.querySelector('.dateFromNow');

const li = document.querySelectorAll('li');

shortDate.addEventListener('click',()=>{
    li[0].innerHTML = `"31102011"=>"${dateFormatter.shortDate('31102011')}"`
})
longDate.addEventListener('click',()=>{
    li[1].innerHTML = `"31102011" => "${dateFormatter.longDate('31102011')}"`
})
reverseDate.addEventListener('click',()=>{
    li[2].innerHTML = `("20130431", "YYYYMMDD") => ${dateFormatter.reverseDate('20130431', 'YYYYMMDD')} `
})
secondRevDate.addEventListener('click',()=>{
    li[3].innerHTML = `("20130431", "YYYYMMDD", "MM-DD-YYYY") => ${dateFormatter.secondReverseDate('20130431', 'YYYYMMDD', 'MM-DD-YYYY')} `
})
dateFromNow.addEventListener('click',()=>{
    li[4].innerHTML = `("2013-04-31", "YYYY-MM-DD").fromNow() => ${dateFormatter.dateFromNow('2013-04-31', 'YYYY-MM-DD')} `
})

//stringCalculator

const resultOfOperation = document.querySelector('.showResualt');
const addOperation = document.querySelector('.addOperation');

const calc = new StringCalc();

addOperation.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        resultOfOperation.innerHTML = calc.operation(addOperation.value);
    }
});

//textFormatter


const text = document.querySelector('.textarea');
const showText = document.querySelector('.showText');

const maxNumStr = document.querySelector('.maxNumStr');
const maxLen = document.querySelector('.maxLen');

text.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {

        showText.innerHTML = getText(text.value, Number(maxNumStr.value), Number(maxLen.value), 'по предложению');
    }
});
