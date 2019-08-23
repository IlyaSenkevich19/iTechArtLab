class StringCalc {
    constructor() {
        this.methods = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            "/": (a, b) => a / b,
            "*": (a, b) => a * b,
        }
    }

    operation(str) {
        const split = str.split(" ");
        const firstElement = +split[0];
        const operation = split[1];
        const secondElement = +split[2];

        return this.methods[operation](firstElement, secondElement);
    }
}


const resultOfOperation = document.querySelector('.showResualt');
const addOperation = document.querySelector('.addOperation');

const calc = new StringCalc();

addOperation.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        resultOfOperation.innerHTML = calc.operation(addOperation.value);
    }
});