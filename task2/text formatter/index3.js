class TextFormatter {


    getText(str, maxLen, maxNumStr, type) {
        const lines = str.split("\n");
        const newlines = lines.filter((el, index) => index < maxNumStr);
        return newlines;
    }

    wordFormat() {

    }

    symbolFormat() {

    }

    sentenceFormat() {

    }

}

const formatter = new TextFormatter();

// console.log(formatter.getText('привет как твои дела мир', 12, 3, 'по слову'));

const text = document.querySelector('.textarea');
const showText = document.querySelector('.showText');

text.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        showText.innerHTML = formatter.getText(text.value, 12, 3);
    }
});



// const len = str.split(" ");
//         return len[len.length - 1];