const arr = [1, -2, 3, 4, -9, 6];

let input = document.querySelector('input');
let addElementButton = document.querySelector('.addElement');
let findMaxArrayBtn = document.querySelector('.findMax');
let showArray = document.querySelector('.info');
let subSumResult = document.querySelector('.result');

const newArr = [];

function maxArray(arr) {
    let maxSum = 0;
    let everySum = 0;
    for (let element of arr) {
        everySum += element;
        if (everySum < 0) everySum = 0;
        maxSum = Math.max(everySum, maxSum);
    }
    return maxSum;
}

findMaxArrayBtn.addEventListener('click', () => {
    console.log(newArr);
    subSumResult.innerHTML = maxArray(newArr);
});


function creatingArr(element) {
    newArr.push(Number(element));
};

addElementButton.addEventListener('click', () => {
    showArray.innerHTML = creatingArr(input.value);
    input.value = '';
})





