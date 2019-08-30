export class ArrayCalc {
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









