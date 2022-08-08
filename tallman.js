
function tallMan(number) {
    let largeNumber = [0];
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        // console.log(element);
        if (element > largeNumber) {
            largeNumber = element;
        }
    }
    return largeNumber;
}

const array = [20, 49, 38, 94, 36, 251, 57, 93, 83, 120, 84, 36]
const result = tallMan(array);
console.log(result);