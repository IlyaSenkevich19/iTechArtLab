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
        result.innerHTML = this.operation(data);
    }

    showFromCache(key) {
        console.log("It is from the CACHE");
        result.innerHTML = this.CACHE[key];
    }

    caching(data) {
        if (this.CACHE[data.toString()]) {
            this.showFromCache(data.toString());
        } else {
            this.addToCache(data);
        }
    }
}

const calculator = new cachingCalc();


const result = document.querySelector('.showResualt');
const addOperat = document.querySelector('.addOperation');

addOperat.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        console.log('ok')
     calculator.caching(addOperat.value);
    }
});