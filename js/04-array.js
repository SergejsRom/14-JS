/*
ARRAY
    - pozicijos prasideda nuo nuliu
    - pozicijos tik sveikieji skaiciai
    - ilgis / irasu kiekis -> .lenght

*/

const pazymiai = [10, 2, 8, 4, 20];
console.log('Pazymiai:', pazymiai);

// gauti vidurki
// gauti kieki
// mediana
// koks pirmas
// koks paskutinis
// koks maziausias (veliau)
// koks didziausias (veliau)

console.log('Pirmas:', pazymiai[0]);
console.log("Antras:", pazymiai[1]);
console.log('trecias:', pazymiai[1.5]);

const pazymiuKiekis = pazymiai.length;
const paskutinioPozicija = pazymiuKiekis - 1;
console.log('Paskutinis:', pazymiai[paskutinioPozicija]);
console.log('Paskutinis:', pazymiai[pazymiai.length - 1]);
// masyvas -> ilgis -> paskutinio pozicija
// [1] -> 1 -> 0
// [1, 2] -> 1
// [1, 2, -6] -> 2
// [1, 2, -6, 13] -> 4

const studentai = ['Petras', 'Maryte', 'Jonas', 'Ona', 'Markas', 'Sofija'];
console.log(studentai);

let index = 0;

console.log(`Čia yra: ${studentai [index++]}.`);
console.log(`Čia yra: ${studentai [index++]}.`);
console.log(`Čia yra: ${studentai [index++]}.`);
console.log(`Čia yra: ${studentai [index++]}.`);
console.log(`Čia yra: ${studentai [index++]}.`);
console.log(`Čia yra: ${studentai [index++]}.`);
 


