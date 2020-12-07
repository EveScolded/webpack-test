import '../scss/main.scss';

import moment from 'moment';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀');
var x = moment(new Date);
console.log();
const name = 'Ewka';
const age = 27;

console.log(name);
console.log(age);
console.log(`Nazywam się ${name} i mam ${age} lat.`)


function testowa (Fname,Fage)
{console.log (`Mam na imię ${Fname} i mam ${Fage} lat.`);}

testowa("Ewka",25);

const myButton = document.querySelector('.navigation__button--js');

myButton.addEventListener('click', () => {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--ON');
});

let isDark = true;

const darkButton = document.querySelector('.darkmode__button--js');

darkButton.addEventListener('click',() => {
    debugger;
    if (isDark == true)  {
        document.documentElement.style.setProperty('--background-color', 'white');
        document.documentElement.style.setProperty('--text-color', 'black');
        isDark = false;
    } else {
        document.documentElement.style.setProperty('--background-color', 'black');
        document.documentElement.style.setProperty('--text-color', 'white');
        isDark = true;
    }
});