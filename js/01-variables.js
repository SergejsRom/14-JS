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

let suma = 2;
console.log('suma', suma);
suma = 3;
console.log('suma', suma);
suma = 4;
console.log('suma', suma);

const tekstas = 'Namas';
console.log(tekstas);
let text = 'Sodas';
console.log(text);
text = 'Butas'
console.log(text);

const skaiciuSarasas1 = [4,1,7,10,6];
console.log(skaiciuSarasas1);
const skaiciuSarasas2 = [4,1,7,8,6];
console.log(skaiciuSarasas2);
const skaiciuSarasas = [10,5,15,5,10];
console.log(skaiciuSarasas);

const raides = ['a','b','c','d','e','f'];
console.log(raides);
const didelesRaides = ['A','B','C','C','D'];
console.log(didelesRaides);
const zodziai = ['asd', 'qwe', 'poi', 'lkj', 'cvb'];
console.log(zodziai);

const sumavimas = (skaiciuSarasas[0] + skaiciuSarasas[1] + skaiciuSarasas[2] + skaiciuSarasas[3] + skaiciuSarasas[4]);
console.log(sumavimas);
const pliusavimas = (skaiciuSarasas1[0] + skaiciuSarasas1[1] + skaiciuSarasas1[2] + skaiciuSarasas1[3] + skaiciuSarasas1[4]);
console.log(pliusavimas);
const plus = (skaiciuSarasas2[0] + skaiciuSarasas2[1] + skaiciuSarasas2[2] + skaiciuSarasas2[3] + skaiciuSarasas2[4]);
console.log(plus);
const sum = (sumavimas + pliusavimas + plus + suma);
console.log(sum);

const zodziaiTarpas = ['asd', 'qwe', 'poi', 'lkj', 'cvb'].join(' ');
console.log(zodziaiTarpas);
const visiZodziaiIrRaides = [raides, didelesRaides, zodziai]. join (';;;;;   ,   ; ');
console.log (visiZodziaiIrRaides);

const suskaicioti1 = (skaiciuSarasas[0] - skaiciuSarasas[1] + skaiciuSarasas[2] - skaiciuSarasas[3] + skaiciuSarasas[4]);
console.log(suskaicioti1);
