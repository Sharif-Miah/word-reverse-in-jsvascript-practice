
function wordReverse(str) {
    let wordLenght = str.split(' ');
    const array = [];
    // ['This', 'is', 'a', 'word']

    for (i = wordLenght.length - 1; i >= 0; i--) {
        const element = wordLenght[i];
        array.push(element);
    }
    const reverse = array.join(' ')
    return reverse;
}

const thisWord = 'This is a word'
const result = wordReverse(thisWord);
console.log(result);