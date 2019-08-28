 const getText = (str, maxNumStr, maxLen, type) => {

        const chunks = [];

        for (let i = 0; i < str.length; i += maxLen) {
            chunks.push(str.substring(i, i + maxLen));
        };

        const formatWord = str => {
            for (let i = 0; i < str.length - 1; i++) {
                const element = str[i].pop();
                str[i + 1].unshift(element);
            }
            return str;
        };

        const formatSymbol = str => {
            for (let i = 0; i < str.length - 1; i++) {
                const element = str[i].slice(-1);
                if (element != '') {
                    str[i].push('-');
                }
            }
            return str;
        };

        const sentenceFormat = str => {
            for (let i = 0; i < str.length - 1; i++) {
                if (str[i].join(' ').includes('.')) {
                    const afterPoint = str[i].join(' ').split('.').pop();
                    str[i + 1].unshift(afterPoint);
                }
            }
            return str;
        };


        const chooseType = el => {
            switch (type) {
                case 'по слову': return formatWord(el);
                case 'по символу': return formatSymbol(el);
                case 'по предложению': return sentenceFormat(el);
                case 'без переносов': return el;
            }
        };

        const strings = chunks.filter((el, index) => index < maxNumStr);
        const stringArray = strings.map(el => el.split(" "));
        const result = chooseType(stringArray);
        const a = result.map(el => el.join(' '));
        const newStrings = a.join(`<br\/>`);
        return newStrings;
    }




const text = document.querySelector('.textarea');
const showText = document.querySelector('.showText');

const maxNumStr = document.querySelector('.maxNumStr');
const maxLen = document.querySelector('.maxLen');

text.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        
        showText.innerHTML = getText(text.value, Number(maxNumStr.value), Number(maxLen.value), 'по предложению');
    }
});

