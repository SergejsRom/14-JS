// VALIDATION
function bigNum(list) {
    if (typeof list !== 'object') {
        return 'ERROR: netinkamas tipas';
 }
 if (list.length === 0) {
    return 'ERROR: sarasas negali buti tuscias';
 }
// LOGIC
    let biggestNumber = -Infinity;

    for (let i = 0; i < list.length; i++) {
        const number = list[i];
        if (typeof number !== 'number' || !isFinite(number)) {
            continue;
        }
        if (number > biggestNumber){
            biggestNumber = number
        }
        
    }
    // RESULT VALIDATION
    if (biggestNumber === -Infinity) {
        return 'nera normaliu skaičiu'
    }
    // RESULT RETURN
    return biggestNumber;
}

console.log(bigNum('pomidoras'), '-->','error');
console.log(bigNum([]), '-->', 'error');
console.log(bigNum([1]), '-->', 1);
console.log(bigNum([1, 3, 2]), '-->', 3);
console.log(bigNum([-7, -9, -5]), '-->', -5);
console.log(bigNum([-7, -9, 'x']), '-->', -7);
console.log(bigNum([-9, 'x', -7]), '-->', -7);
console.log(bigNum(['x', -9, -7]), '-->', -7);
console.log(bigNum(['x']), '-->', 'error');