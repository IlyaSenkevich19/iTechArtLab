class TextFormatter {


    getText(str, maxNumStr, maxLen, type) {

        const chunks = [];

        for (let i = 0; i < str.length; i += maxLen) {
            chunks.push(str.substring(i, i + maxLen));
        };

        const formatWord = str => {
            const lastWord = str.split(' ').pop();
            return `${lastWord} <br\/>`;
            // return lastWord;
        };

        const formatSymbol = str => {
            const lastSymbol = str.split('').pop();
            console.log(lastSymbol);
            // return lastSymbol;
        };

        const sentenceFormat = str => {
           const lastSentence = str.split('.').pop();
           console.log(lastSentence);
        //    return lastSentence;
        };


        const chooseType = el => {
            switch (type) {
                case 'по слову': return formatWord(el);
                case 'по символу': return formatSymbol(el);
                case 'по предложению': return sentenceFormat(el);
                default: el;
            }
        };

        const strings = chunks.filter((el, index) => index < maxNumStr);

        const formatStrings = strings.map(el => {
            chooseType(el);
        });



        const newStrings = strings.join(`<br\/>`);

        return newStrings;
    }
}

const formatter = new TextFormatter();

const text = document.querySelector('.textarea');
const showText = document.querySelector('.showText');

text.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        showText.innerHTML = formatter.getText(text.value, 15, 25, 'по предложению');
    }
});

