

// function staring(text) {
//     let reverse = '';
//     for (let i = text.length - 1; i >= 0; i--) {
//         const element = text[i];
//         console.log(element);
//         reverse = reverse + element;
//         console.log(reverse);

//     }
//     return reverse;
// }

// const myText = 'I am a boy';
// const result = staring(myText);
// console.log("This is string reverse :" + result);


function reverseString(text) {
    let reverseTex = '';
    for (i = text.length - 1; i >= 0; i--) {
        const element = text[i];
        reverseTex += element;
        console.log(element, reverseTex);
        // reverseTex = reverseTex + element
    }
    return reverseTex;
}

const textStr = 'I will be a software Developer';
const result1 = reverseString(textStr);
console.log('Reverse Out put: ' + result1);