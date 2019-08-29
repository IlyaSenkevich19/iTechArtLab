const sortArray = (function () {

    const bubbleSort = arr => {
        for (let i = 0, endI = arr.length - 1; i < endI; i++) {
            let wasSwap = false;
            for (let j = 0, endJ = endI - i; j < endJ; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    wasSwap = true;
                }
            }
            if (!wasSwap) break;
        }
        return arr;
    };

    const quickSort = arr => {
        if (arr.length == 0) return [];
        const a = [];
        const b = [], p = arr[0];
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] < p) { a[a.length] = arr[i]; }
            else { b[b.length] = arr[i]; }
        }
        return quickSort(a).concat(p, quickSort(b));
    };

    const simpleSort = arr => {
        const newArr = arr.sort((a, b) => { return a - b; })
        return newArr;
    }

    const selectionSort = arr => {
        var n = arr.length;
        for (let i = 0; i < n - 1; i++) {
            var min = i;
            for (let j = i + 1; j < n; j++) {
                if (arr[j] < arr[min]) min = j;
            }
            var t = arr[min];
            arr[min] = arr[i];
            arr[i] = t;
        }
        return arr;
    }

    return {
        bubble: bubbleSort,
        quick: quickSort,
        simple: simpleSort,
        selection: selectionSort
    }
})();

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
