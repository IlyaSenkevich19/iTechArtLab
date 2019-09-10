export class ArrayCalc {

    constructor(array) {
        this.arr = this.creatingArr(array);
    }

    creatingArr(array) {
       const newArr = array.replace(/[^0-9%^*\/()\-+.]/g, '').split('').map(el=>Number(el));
       console.log(newArr)
        return newArr;
    }

    maxSubSum() {
        let maxSum = 0;
        let everySum = 0;
        for (let element of this.arr) {
            everySum += element;
            if (everySum < 0) everySum = 0;
            maxSum = Math.max(everySum, maxSum);
        }
        return maxSum;
    }

    maxSubSumSecond() {
        let everySum = 0;
        let maxSum = 0;
        for (let i = 0; i < this.arr.length; i++) {
            for (let j = i; j < this.arr.length; j++) {
                everySum += this.arr[j];
                if (everySum > maxSum) {
                    maxSum = everySum;
                }
            }
            everySum = 0;
        }
        return maxSum;
    }

    minElement() {
        let minElement = 0;
        minElement = Math.min(...this.arr);
        return minElement;
    }

    maxElement() {
        let maxElement = 0;
        maxElement = Math.max(...this.arr)
        return maxElement;
    }

    mediumValue() {
        let mediumEl = 0;
        this.arr.sort((a, b) => a - b);
        let firstPart = Math.floor((this.arr.length - 1) / 2);
        let secondPart = Math.ceil((this.arr.length - 1) / 2);
        mediumEl = (this.arr[firstPart] + this.arr[secondPart]) / 2;
        return mediumEl;
    }

    selection() {
        let sliceFrom = 0;
        let sliceTo;
        let max;
        let newArray = [];

        for(let i = 0; i < this.arr.length; i ++) {
            if(this.arr[i] > max) {
                max = this.arr[i];
                sliceTo = i;
            } else {
                newArray.push(this.arr.slice(sliceFrom, sliceTo + 1));
                sliceFrom = i;
                max = this.arr[i];
            }
        }
        newArray.push(this.arr.slice(sliceFrom, sliceTo + 1));

        let maxSum = 0
        let index = 0;
        for(let i in newArray) {
            let seqSum = newArray[i].reduce((a, b) => a + b, 0);
            if(seqSum > maxSum) {
                index = i;
                maxSum = seqSum;
            }
        }
        const sequance = newArray[index];

        return sequance;
    }
}










