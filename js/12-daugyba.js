function daugyba(a, b){
    if (typeof a !== 'number') {
        return 'ERROR: pirms paraetra turi buti skaicius'

    }

    if (typeof b !== 'number') {
        return 'ERROR: antras paraetra turi buti skaicius'

    }
    if (isNaN (a)) {
        return 'ERROR: antras paraetra turi buti skaicius'

    }
    if (isNaN (b)) {
        return 'ERROR: antras paraetra turi buti skaicius'

    }
     if ('' + b === NaN) {
        return 'ERROR: antras paraetra turi buti skaicius'

    }
    return a * b
}


console.log('ERROR',daugyba (7, 'labas'));
console.log('ERROR',daugyba('labas', 5));
console.log('ERROR',daugyba(7, ''));
console.log('ERROR',daugyba('', 5));
console.log(daugyba(true, 5));
console.log(daugyba(false, 5));
console.log(daugyba(7, false));
console.log(daugyba(7, false));
console.log(daugyba(7, 5));
console.log(daugyba(7, 5));
console.log(daugyba(7, 5));

