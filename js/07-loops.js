/* tas kas kartojasi
LOOP: for, while, for-in, for-of, foreach, ...
OBJECT LOOP: for-in, for-of
*/

/* const pazymiai = [10, 2, 8, 4, 6, 8];
let suma = 0;

 for (let i = 0; i < pazymiai.length; i++) {
    const pazymys = pazymiai[i];
    suma += pazymys;

    console.log(`${i}) pazymys ${pazymys} [${suma}]`);
    
}

    console.log('Galutine suma:', suma);
    const vidurkis = suma / pazymiai.length;
    console.log('Vidurkis:', vidurkis);

    console.log('--------------------');
    for (let i= -80; i<-60; i++){
        suma +=i;
        console.log(suma);
    } */

    console.log('--------------------');

// FOR
    const pazymiai = [10, 2, 8, 4, 6, 8];
    let sumaFor = 0;
    for (let i1 = 0; i1 < pazymiai.length; i1++) {
        const pazymys = pazymiai[i1];
        sumaFor += pazymys;

        console.log(`${i1}) pazymys ${pazymys} [${sumaFor}]`);
    }
    console.log('--------------------');

// WHILE
let sumaWhile = 0;
let i2 = 0;
while (i2 < pazymiai.length) {
    const pazymys = pazymiai[i2];
    sumaWhile += pazymys;
    console.log(`${i2}) pazymys ${pazymys} [${sumaWhile}]`); i2++
}
console.log('--------------------');

// FOR-OF
let sumaForOf = 0;
let i3 = 0
for (const pazymys of pazymiai) {
    console.log(pazymys);
    sumaForOf += pazymys;
    console.log(`${i3}) pazymys ${pazymys} [${sumaForOf}]`);
}


// FOREACH
console.log('--------------------');

let sumaForEach = 0;
pazymiai.forEach((a, b) => {
    sumaForEach += pazymys;
    console.log(`${i4}) pazymys ${pazymys} [${sumaForEach}]`);
});

