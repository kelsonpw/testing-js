async function test(title, cb) {
  try {
    await cb();
    console.log(`✅ ${title}`);
  } catch (error) {
    console.error(`🆘 ${title}`);
    console.error(error);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}

global.test = test;
global.expect = expect;
