/*
STRING:

kabutes:
    -viengubos(')
    -dvygubos (")
    -backtick'as (`)

    ignoruoti kabutes, padeti pries reikiama \
*/

const name = 'Petras'
console.log(name);

const lastname = "Petraitis"
console.log(lastname);

const kabutes = "cia kabutes \" dvigubos ir viengubos \' "
console.log(kabutes);

const clientName = 'Maryte';
const clientAge = '87';
// Client Maryte is 87 years old.
const clientSentence = ['Client', clientName, 'is', clientAge, 'years old.']. join (' ');
console.log(clientSentence);

const backtickClient = `Client ${clientName} is ${clientAge} years old.`;
console.log(backtickClient);

const labas = 'Labas rytas, ' + clientName + '!';
const labs = `Labas rytas, ${clientName}!`;
console.log(labas);
console.log(labs);

const n1 = 7;
const n2 = 5;
// 7 + = 12
const atsakymas = `${n1} + ${n2} = ${n1 + n2}`;
console.log(atsakymas)

const rez = `${n1} + ${n2} = ${atsakymas}`;
console.log(rez);

const abc = 'abs-----\'----def';
const abcDydis = abc.length;
console.log(`Abecele "${abc}" dydis yra ${abcDydis} simboliu.`);