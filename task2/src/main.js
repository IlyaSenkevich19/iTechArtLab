import { ArrayCalc } from './modules/arrayProcessingTool.js';
import { sortArray } from './modules/arraySorter.js';
import { converter } from './modules/binaryConverter.js';
import {  cachingCalc } from './modules/cachingCalculator.js';
import { DateFormatter } from './modules/dateDisplayFormatter.js';
import { StringCalc } from './modules/stringCalculator.js';
import { getText } from './modules/textFormatter.js';



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


//ArrayProccessingTool

const input = findElement('.newArray');

input.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {

        const newCalc = new ArrayCalc(input.value);

        findElement('.showResults').innerHTML = `
    Your array: ${newCalc.creatingArr(input.value)};<br\/>
    Continuous Subarray with Maximum Sum of Elements (O(n)): ${newCalc.maxSubSum()};<br\/>
    Continuous Subarray with Maximum Sum of Elements (O(n^2)): ;<br\/>
    Maximum array element: ${newCalc.maxElement()};<br\/>
    Minimal array element: ${newCalc.minElement()};<br\/>
    Array median value: ${newCalc.mediumValue()};<br\/>
    Maximum length of an array of increasing sequence: ${newCalc.selection()};`
    }
})


//arraySorter

const parser = (value) => {
    const newValue = value.split(' ').map(el => Number(el));
    console.log(newValue)
    return newValue;
}

const inputArr = findElement('.newAr');


inputArr.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        const value = parser(inputArr.value);
        findElement('.sorterResult').innerHTML = `
        Your array: ${parser(inputArr.value)};<br\/>
        SelectionSort: ${sortArray.selection(value)};<br\/>
        BubbleSort: ${sortArray.bubble(value)};<br\/>
        SimpleSort: ${sortArray.simple(value)};<br\/>
        QuickSort: ${sortArray.quick(value)};<br\/>`
    }
})

//binaryConverter

const inputNumber = findElement('.number');

inputNumber.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        findElement('.result').innerHTML = converter.getNumber(inputNumber.value);
    }
})

//cachingCalculator

const addOperat = findElement('.add');

addOperat.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        findElement('.showRes').innerHTML = cachingCalc.caching(addOperat.value);
    }
});

//dateDisplayFormatter

const dateFormatter = new DateFormatter();


const shortDate = findElement('.shortDate');
const longDate = findElement('.longDate');
const reverseDate = findElement('.reverseDate');
const secondRevDate = findElement('.secondRevDate');
const dateFromNow = findElement('.dateFromNow');

const li = document.querySelectorAll('li');

shortDate.addEventListener('click', () => {
    li[0].innerHTML = `"31102011"=>"${dateFormatter.shortDate('31102011')}"`
})
longDate.addEventListener('click', () => {
    li[1].innerHTML = `"31102011" => "${dateFormatter.longDate('31102011')}"`
})
reverseDate.addEventListener('click', () => {
    li[2].innerHTML = `("20130431", "YYYYMMDD") => ${dateFormatter.reverseDate('20130431', 'YYYYMMDD')} `
})
secondRevDate.addEventListener('click', () => {
    li[3].innerHTML = `("20130431", "YYYYMMDD", "MM-DD-YYYY") => ${dateFormatter.secondReverseDate('20130431', 'YYYYMMDD', 'MM-DD-YYYY')} `
})
dateFromNow.addEventListener('click', () => {
    li[4].innerHTML = `("2013-04-31", "YYYY-MM-DD").fromNow() => ${dateFormatter.dateFromNow('2013-04-31', 'YYYY-MM-DD')} `
})

//stringCalculator

const resultOfOperation = findElement('.showResualt');
const addOperation = findElement('.addOperation');

addOperation.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        const calc = new StringCalc();
        resultOfOperation.innerHTML = calc.operation(addOperation.value);
    }
});

//textFormatter


const text = findElement('.textarea');
const showText = findElement('.showText');

const maxNumStr = findElement('.maxNumStr');
const maxLen = findElement('.maxLen');

text.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        showText.innerHTML = getText(text.value, Number(maxNumStr.value), Number(maxLen.value), 'по предложению');
    }
});
