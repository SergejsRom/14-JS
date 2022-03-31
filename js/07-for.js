/* tas kas kartojasi
LOOP: for, while, for-in, for-of, foreach, ...
*/

const pazymiai = [10, 2, 8, 4, 6, 8];
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
    }