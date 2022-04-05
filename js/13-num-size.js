function numSize(num) {
    if (typeof num !== 'number' 
   // || isNaN(num)     patikrina tas pats !isFinite(num))
   // || num === Infinity  patikrina tas pats !isFinite(num))
  //  || num === -Infinity  patikrina tas pats !isFinite(num))
    || !isFinite(num)) {
        return 'error: netinkamas tipas';
    }
    const numAsString = '' + num;
    let size = numAsString.length;
        if(num % 1 !== 0) {
            size--;
        }
        if (num < 0) {
            size--;
        }

    return size;
}

console.log(numSize(5), '-->', 1);
console.log(numSize(true), '-->', 'ERROR');
console.log(numSize('asd'), '-->', 'ERROR');
console.log(numSize(NaN), '-->','ERROR');
console.log(numSize(Infinity), '-->','ERROR');
console.log(numSize(-Infinity), '-->','ERROR');


console.log(numSize(370605457895), '-->', 1);
console.log(numSize(3.14), '-->', 3)
console.log(numSize(-3.14), '-->', 3)

console.log('EXTRA galvos skausmas');
console.log(numSize(0.000001), '-->', 13)
console.log(numSize(100000000000000000000), '-->', 21)

