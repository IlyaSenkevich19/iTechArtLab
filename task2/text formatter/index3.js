class TextFormatter {


    getText(str, maxLen, maxNumStr, type) {

        const lines = str.split("\n");
        const newlines = lines.filter((el, index) => { index < maxNumStr && el.length < maxLen });
        // const linesString = newlines.join('');
        const line = newlines.map(el => {
            const div =  document.createElement('div');
            div.innerHTML = el;
        });

        const newl = line.join('');
        // showText.appendChild(newl);
        
        console.log('lines', line, line.join(''))


        switch (type) {
            case 'по слову': this.wordFormat(str); break;
            case 'по символу': this.symbolFormat(str); break;
            case 'по предложению': this.sentenceFormat(str); break;
        }



        return newl;
    }

    wordFormat() {

    }

    symbolFormat() {

    }

    sentenceFormat() {

    }

}

const formatter = new TextFormatter();

const text = document.querySelector('.textarea');
const showText = document.querySelector('.showText');

text.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        showText.innerHTML = formatter.getText(text.value, 12, 3, 'по слову');
    }
});



// const len = str.split(" ");
//         return len[len.length - 1];