const { sum, sumAsync, subtractAsync, subtract } = require('./math');

test('sum adds numbers', async () => {
  expect(sum(3, 7)).toBe(10);
  expect(sum(10, 14)).toBe(24);
  expect(sum(0, 0)).toBe(0);
  expect(sum(0, -10)).toBe(-10);

  expect(await sumAsync(3, 7)).toBe(10);
  expect(await sumAsync(10, 14)).toBe(24);
  expect(await sumAsync(0, 0)).toBe(0);
  expect(await sumAsync(0, -10)).toBe(-10);
});

test('subtract subtracts numbers', async () => {
  expect(subtract(7, 3)).toBe(4);
  expect(subtract(14, 10)).toBe(4);
  expect(subtract(0, 0)).toBe(0);
  expect(subtract(0, -10)).toBe(10);

  expect(await subtractAsync(7, 3)).toBe(4);
  expect(await subtractAsync(14, 10)).toBe(4);
  expect(await subtractAsync(0, 0)).toBe(0);
  expect(await subtractAsync(0, -10)).toBe(10);
});
