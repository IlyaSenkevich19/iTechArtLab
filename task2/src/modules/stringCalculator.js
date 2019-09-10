export class StringCalc {
constructor() {
    this.methods = {
        sum: '+',
        sub: '-',
        div: '/',
        multi: '*',
        mod: '%',
        exp: '^'
    };
    
    this.methods.order = [
        [
            [this.methods.multi],
            [this.methods.div],
            [this.methods.mod],
            [this.methods.exp]
        ],
        [
            [this.methods.sum],
            [this.methods.sub]
        ]
    ];
}
   



    calculate(first, operation, second){
        const firstEl = +first;
        const secondEl = +second;
       
        switch (operation) {
            case this.methods.sum:
                return firstEl + secondEl;
            case this.methods.sub:
                return firstEl - secondEl;           
            case this.methods.div:
                return firstEl / secondEl;  
            case this.methods.multi:
                return firstEl * secondEl;
            case this.methods.mod:
                return firstEl % secondEl;  
            case this.methods.exp:
                return Math.pow(firstEl, secondEl);  
            default:
                null;
        }
    }

    operation(input) {
        input = input.replace(/[^0-9%^*\/()\-+.]/g, '');
        let output;
        for (let i = 0; i < this.methods.order.length; i++) {
            let reg = new RegExp(`(\\d+\\.?\\d*)([\\${this.methods.order[i].join('\\')}])(\\d+\\.?\\d*)`);
            reg.lastIndex = 0;
            while (reg.test(input)) {
                output = this.calculate(RegExp.$1, RegExp.$2, RegExp.$3);
                if (isNaN(output) || !isFinite(output))
                    return output;
                input = input.replace(reg, output);
            }
        }
    
        return output;
    }

   

}

