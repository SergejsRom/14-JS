/*
IF

sablonai:
if () {}
if () {} else []

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


/*
switch () {
    
}

for () {
    
}
*/