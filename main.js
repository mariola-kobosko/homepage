const menu = document.querySelector('.navigation__button--js');

menu.addEventListener('click', () => { 
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open')
})

const name = "Mariola";
const age = "32";

console.log(name);
console.log(age);
console.log(`Cześć! Nazywam się ${name} i mam ${age} lata.`);

const heading = document.querySelector('.main__heading--js');
console.log(heading);
const h2 = document.querySelector('.dom__js');
console.log(h2);
h2.innerHTML = `Ćwiczymy domowe przedszkole`

const greet = (age, firstName) => {
    console.log(
        `Witam Cię na mojej stronie. Nazywam się ${firstName} i mam ${age} lat.`);
}
greet(32, 'Mariola');

function calculateMyNumber(MyNumber) {
    MyNumber = MyNumber + 3;
    console.log(MyNumber);
    return MyNumber*7;
}
const myResult = calculateMyNumber(2)
console.log(myResult)

function textChangeing(querySelectorContent, content) {
    const element = document.querySelector(querySelectorContent);
    element.innerHTML = (content);
}
textChangeing( '.about__heading--js',' Dlaczego?')

