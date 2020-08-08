const array = [10, 12, 15, 25, 36, 40];
const numb = [20, 40, 88, 90];
const numbers = [40, 60, 80];

const allArray = array.concat(numb);
console.log(allArray);

const allArray1 = array.concat(numb).concat([5]).concat(numbers);
console.log(allArray1);

const allArray3 = [array, numb, 5, numbers]; // ========     validable na
console.log(allArray3);

const allArray4 = [...array, ...numb, 5, ...numbers];
console.log(allArray4);

// const maximum = Math.max(allArray4); //======    Nan ashbe
const maximum = Math.max(...allArray4);
console.log(maximum)