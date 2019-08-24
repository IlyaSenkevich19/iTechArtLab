class cachingCalc {

    constructor() {
        this.methods = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            "/": (a, b) => a / b,
            "*": (a, b) => a * b,
        };
        this.CACHE = {};
    }

    operation(str) {
        const split = str.split(" ");
        const firstElement = +split[0];
        const operation = split[1];
        const secondElement = +split[2];
        return this.methods[operation](firstElement, secondElement);
    }

    addToCache(data) {
        this.CACHE[data.toString()] = this.operation(data);
        resultOfOperation.innerHTML = this.operation(data);
    }

    showFromCache(key) {
        console.log("It is from CACHE");
        resultOfOperation.innerHTML = this.CACHE[key];
    }

    caching(data) {
        if (this.CACHE[data.toString()]) {
            this.showFromCache(data.toString());
        } else {
            this.addToCache(data);
        }
    }
}

const calc = new cachingCalc();


const resultOfOperation = document.querySelector('.showResualt');
const addOperation = document.querySelector('.addOperation');

addOperation.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
     calc.caching(addOperation.value);
    }
});