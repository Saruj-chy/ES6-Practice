//========       1st step
const doubleIT = function (numb) {
  return numb * 2;
}
const result = doubleIT(5);
console.log(result)


//======      2nd Step
const doubleIT1 = function myFunc(numb) {
  return numb * 2;
}
const result1 = doubleIT1(15);
console.log(result1)


//========       3ed step
const doubleIT2 = num => num * 2;

const result2 = doubleIT1(10);
console.log(result2)

//========       4th step
const doubleIT3 = (num1, num2) => num1 + num2;


const result3 = doubleIT3(10, 20);
console.log(result3)

const give10 = () => 10;

const result4 = give10();
console.log(result4)

//==========     5th step  ekhane multi line likhle {} er bitore reurn kore dite hobe
const doMath = (x, y) => {
  const sum = x + y;
  const diff = x - y;
  const ans = sum * diff;
  return ans;
}

const result5 = doMath(30, 20);
console.log(result5)
