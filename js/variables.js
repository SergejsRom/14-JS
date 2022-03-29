/*
KINTAMIEJI

Inicijavimo budas: PRIVALOME VISADA NURODYTI BUDA
const - defaul inicijavimo budas 
let - antrinis budas inicijuoti, kai zinome jog reiksme tures keistis
var - pats seniausias ir geriau niekada nenaudoti jei rupi saugumas

Duomenu tipas: 
- number, 
- string (tekstas)
- boolean (logine reiksme: true | false)
- array (masyvas, sarasas, matrica*) i [] sklaiustus

*/
const luckyNumber = 777;
console.log('Numeris', luckyNumber);

console.log('Laba diena, Vardas');

let pinigine = 0;
console.log('Pinigine', pinigine);

pinigine = 5;
console.log('Pinigine',pinigine);

const vardas = 'Maryte';
console.log(vardas);
console.log('Laba diena, Petras.') /*statinis variantas */
console.log ('Laba diena, ' + vardas + '.');


const pasisveikinimas = 'Laba diena, ' + vardas + '.'
console.log(pasisveikinimas)

const arVedes = true;
const arTuriVaiku = false;
const arMeluojaDelVaiku = true;
console.log('Ar vedes?', arVedes);
console.log('Ar turi?', arMeluojaDelVaiku);
console.log('Ar turi?', arTuriVaiku);

console.log(1, 2, 3, 4)

console.log(2+2*2)
console.log('2+2*2')

console.log(true, false);
console.log('true, false');

const pazymiai = [10, 2, 8, 4, 5];
console.log('Pazymiai:', pazymiai);

const studentai = ['Petras', 'Maryte', 'Jonas', 'Ona'];
console.log(studentai);

const booleanList = [true, false, true, false, true]
console.log(booleanList);

const random = [1, 'a', true, []];
console.log(random);