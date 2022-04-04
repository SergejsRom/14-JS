function sumaIntervale(nuo, iki) {
    let suma = 0;
    for (let a = nuo; a <= iki; a++) {
        suma +=a;
    }
    return suma;
}
    console.log(sumaIntervale(10, 20));

console.log(sumaIntervale(0, 0), '-->', 0);
console.log(sumaIntervale(0, 1), '-->', 1);
console.log(sumaIntervale(0, 100), '-->', 5050);
console.log(sumaIntervale(10, 14), '-->', 0);
console.log(sumaIntervale(-70, 30), '-->', -2020);