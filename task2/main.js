import DateFormatter from './dateDisplayFormatter/index2.js'

const dateFormatter = new DateFormatter();


const shortDate = document.querySelector('.shortDate');
const longDate = document.querySelector('.longDate');
const reverseDate = document.querySelector('.reverseDate');
const secondRevDate = document.querySelector('.secondRevDate');
const dateFromNow = document.querySelector('.dateFromNow');

const li = document.querySelectorAll('li');

shortDate.addEventListener('click',()=>{
    li[0].innerHTML = `"31102011"=>"${dateFormatter.shortDate('31102011')}"`
})
longDate.addEventListener('click',()=>{
    li[1].innerHTML = `"31102011" => "${dateFormatter.longDate('31102011')}"`
})
reverseDate.addEventListener('click',()=>{
    li[2].innerHTML = `("20130431", "YYYYMMDD") => ${dateFormatter.reverseDate('20130431', 'YYYYMMDD')} `
})
secondRevDate.addEventListener('click',()=>{
    li[3].innerHTML = `("20130431", "YYYYMMDD", "MM-DD-YYYY") => ${dateFormatter.secondReverseDate('20130431', 'YYYYMMDD', 'MM-DD-YYYY')} `
})
dateFromNow.addEventListener('click',()=>{
    li[4].innerHTML = `("2013-04-31", "YYYY-MM-DD").fromNow() => ${dateFormatter.dateFromNow('2013-04-31', 'YYYY-MM-DD')} `
})

