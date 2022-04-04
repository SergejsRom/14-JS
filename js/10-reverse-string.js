function reverseString(text) {
    const a = text.length - 1;
    let reverse = '';

    for (let i = 0; i < text.length; i++) {
        const position  = a - i;
        const letter = text[position];
        reverse += letter
        
    }

    return reverse;
}
console.log(reverseString('abcdef'));
console.log(reverseString('sula'));


console.log('---------------');

function reverseString2(text) {
    let reverse = '';

    for (let i = 0; i < text.length; i++) {
        const letter = text[i];
        reverse = letter + reverse;
    }

    return reverse;
}
console.log(reverseString2('sula'));
console.log('---------------');

function reverseString3(text) {
    let reverse = '';
    for (let i = text.length - 1; i >= 0; i--) {
        reverse += text[i];
        
    }
    return text;

}
console.log(reverseString3('abcde'));