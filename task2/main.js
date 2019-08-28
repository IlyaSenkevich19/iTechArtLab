import getText from './text formatter/index3';

const text = document.querySelector('.textarea');
const showText = document.querySelector('.showText');

const maxNumStr = document.querySelector('.maxNumStr');
const maxLen = document.querySelector('.maxLen');

text.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        
        showText.innerHTML = getText(text.value, Number(maxNumStr.value), Number(maxLen.value), 'по предложению');
    }
});