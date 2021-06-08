function sum(numbers) {
  let sum = 0;
  numbers.forEach((number) => (sum += number));
  return sum;
}

function copyArrayItems(array) {
  let arrayCopy = [];
  array.forEach((item) => arrayCopy.push(item));
  return arrayCopy;
}

module.exports = { sum, copyArrayItems };
