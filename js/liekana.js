function liekana(nuo, iki, daliklis) {
    let count = 0;
    for (let i = nuo; i <= iki; i++) {
        if(i % daliklis === 0) {
            count++;
        }
    }
    return `skaiciu intervle tarp ${nuo} ir ${iki}, besidalijanciu be liekanos is ${daliklis} yra ${count} vnt`
}

console.log(liekana(0, 11, 3));
console.log(liekana(0, 11, 5));
console.log(liekana(0, 11, 7));
console.log(liekana(8, 31, 3));
console.log(liekana(8, 31, 7 ));
console.log(liekana(-18, 18, 3));
console.log(liekana(-18, 18, 7));
console.log(liekana(0, 100000000, 7));