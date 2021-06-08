function sum(numbers) {
  return numbers.reduce((acc, number) => acc + number);
}

function join(strings, token) {
  return strings.reduce((acc, string) => acc + token + string);
}

function flattenArray(array) {
  return array.reduce((acc, curr) => acc.concat(curr), []);
}

module.exports = { sum, join, flattenArray };
