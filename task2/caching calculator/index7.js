class cachingCalc {

    constructor() {
        this.methods = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            "/": (a, b) => a / b,
            "*": (a, b) => a * b,
        };
        this.CACHE = new Object();
        this.arr = [];
    }

    operation(str) {
        const split = str.split(" ");
        const firstElement = +split[0];
        const operation = split[1];
        const secondElement = +split[2];
        // this.addToCache(split);
        return  this.methods[operation](firstElement, secondElement);
    }

    addToCache(data) {
        this.arr = [];
        const key = Math.random();
        this.CACHE[key] = this.operation(data);
        console.log(this.CACHE);
        this.arr.push(this.CACHE[key]);
        this.arr.push(key);
        console.log(this.arr);
        resultOfOperation.innerHTML = data;
        // return this.CACHE[key];
    }
}

const calc = new cachingCalc();

const caching = (data) => {
    if(calc.CACHE[calc.arr[1]]) {
        calc.operation(data);
    } else {
       calc.addToCache(data)
    }
}



// const caching = (key) => {
//     if (CACHE[key]) {
//         addToCache(data, key)
//     } else {
//         showCache(CACHE[key]);
//     }

// }

// const addToCache = (data, key) => {
//     CACHE[key] = data;
//     showCache(data);
// }


const resultOfOperation = document.querySelector('.showResualt');
const addOperation = document.querySelector('.addOperation');



addOperation.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        resultOfOperation.innerHTML = caching(addOperation.value);
    }
});