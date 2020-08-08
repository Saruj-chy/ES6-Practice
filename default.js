function add(num1, num2 = 0) {
  // if (num2 == undefined) {
  //   num2 = 0;
  // }
  // num2 = num2 || 0;
  return num1 + num2;
}

const total = add(10, 15);
console.log(total);

const sum = add(10)
console.log(sum)