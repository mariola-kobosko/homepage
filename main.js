const name = "Mariola";
const age = "32";

console.log(name);
console.log(age);
console.log(`Cześć! Nazywam się ${name} i mam ${age} lata.`);

const heading = document.querySelector('.index-header');
console.log(heading);
const h2 = document.querySelector('.dom__js');
console.log(h2);
h2.innerHTML = `Ćwiczymy domowe przedszkole`

const greet = (age, firstName) => {
    console.log(
        `Witam Cię na mojej stronie. Nazywam się ${firstName} i mam ${age} lat.`
    );
}
greet(32, 'Mariola');
