class TextFormatter {


    getText(str, maxNumStr, maxLen, type) {

        // const lines = str.split("\n");
        // const newlines = lines.filter((el, index) => index < maxNumStr);
        // const linesString = newlines.join(`<br\/>`);

        // const len = str.split(" ");
        // return len[len.length - 1];

        const amountStrings = [];


        // const countingStrings = str.filter((str, maxNumStr) => str.l < maxNumStr);

        if (str.length > maxLen) {
            amountStrings.push(str.slice(0, maxLen));
            amountStrings.push(str.slice(maxLen));
            const newString = `${str.slice(0, maxLen)} <br\/> ${str.slice(maxLen)}`;
            return newString;
        }
        
        console.log(amountStrings);

      
      


// привет как твои дела что делаешь сегодня вечером лол

        // for (let el of newlines) {
        //     if (el.length > maxLen)`${el} <br\/>`;

        // }

        // switch (type) {
        //     case 'по слову': this.wordFormat(str); break;
        //     case 'по символу': this.symbolFormat(str); break;
        //     case 'по предложению': this.sentenceFormat(str); break;
        // }

        // return linesString;
    }

    wordFormat(str) {

    }

    symbolFormat(str) {

    }

    sentenceFormat(str) {

    }

}

const formatter = new TextFormatter();

const text = document.querySelector('.textarea');
const showText = document.querySelector('.showText');

text.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        showText.innerHTML = formatter.getText(text.value, 2, 5, 'по слову');
    }
});



