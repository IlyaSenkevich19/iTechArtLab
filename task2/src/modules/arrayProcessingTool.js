export class ArrayCalc {

    constructor(array) {
        this.arr = this.creatingArr(array);
    }

    creatingArr(array) {
        const strArr = array.split(' ');
        const newArr = strArr.map(el => Number(el));
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
        let currentQueue = [];
        let lengthOfQue = [];
        for (let i = 0; i < this.arr.length; i++) {
            if (currentQueue.length === 0) {
                currentQueue.push(this.arr[i]);
            } else if (currentQueue[currentQueue.length - 1] - this.arr[i] < 0) {
                currentQueue.push(this.arr[i]);
            } else if (lengthOfQue.length <= currentQueue.length) {
                lengthOfQue = current;
                currentQueue = [];
                currentQueue.push(this.arr[i]);
            }
            if (this.arr.length == i + 1 && currentQueue.length >= lengthOfQue.length) {
                lengthOfQue = currentQueue;
            }
        }
        return lengthOfQue;
    }
}










