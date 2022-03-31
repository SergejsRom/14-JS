/*
IF

sablonai:
if () {}
if () {} else {}
if () {} else {} if () {} else {}...if () {} else {}

Palyginimo operatoriai:
    - visi; >, <, <=, >=, !=, ==, ===, !==
    - naudotini:  >, <, <=, >=, ===, !==
    - Nenaudotini; !=, ==,
*/

const a=77;
const b=78;

7 > 5

if (a <= b) {
    console.log('A yra maziau arba lygu uz B');
} else {
 console.log('A yra maziau uz B');
}

if (a == b) {
    console.log('A yra lygu B');
} else {
 console.log('A nera lygu B');
}

if (a !== b) {
    console.log('A ne lygu B');
} else {
 console.log('A lygu B');
}

//Griežtas tikrinimas//
if (a === b) {
    console.log('Alygu B');
} else {
 console.log('A ne lygu B');
}

const day = 2
if (day === 1) {
    console.log('pirmadienis');
} else if (day === 2) {
    console.log('antradienis')
}
// ir taip toliau

console.log('------------');
const akiuSpalva = 'asdf'

if (akiuSpalva === 'zalia') {
    console.log('Zaliaakiai yra zalciai');
} else {
    if (akiuSpalva === 'melyna') {
        console.log('Melynakiai megsta melynes');
} else {
    if (akiuSpalva === 'ruda') {
        console.log ('Rudaakiai yra melagiai')
    } else {
        if (akiuSpalva === 'raudona') {
            console.log('Turbut programeris');
        } else {
            console.log(' O turi akis?');
        }
    }
}
}


/*
switch () {
    
}

for () {
    
}
*/