const sum = (a, b) => a + b;

const sumAsync = (a, b) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(sum(a, b));
    }, 400);
  });

const subtract = (a, b) => a - b;

const subtractAsync = (a, b) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(subtract(a, b));
    }, 400);
  });

module.exports = { sum, sumAsync, subtract, subtractAsync };
