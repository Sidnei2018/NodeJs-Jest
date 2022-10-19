// const sum = require('./sum');

// test('adds 100 / 2 to equal 50', () => {
//   expect(sum(100, 2)).toBe(50);
// });

// const sum = require('./sum');

// test('adicionando números positivos não é zero', () => {
//     for (let a = 1; a < 10; a++) {
//       for (let b = 1; b < 10; b++) {
//         expect(a + b).not.toBe(0);
//       }
//     }
//   });

// const sum = require('./sum');

// test('atribuição de objeto', () => {
//     const data = { one: 1 };
//     data['two'] = 2;
//     expect(data).toEqual({ one: 1, two: 2 });
// });

// const sum = require('./sum');

// test('nulo', () => {
//     const n = null;
//     expect(n).toBeNull();
//     expect(n).toBeDefined();
//     expect(n).not.toBeUndefined();
//     expect(n).not.toBeTruthy();
//     expect(n).toBeFalsy();
//   });
  
//   test('zero', () => {
//     const z = 0;
//     expect(z).not.toBeNull();
//     expect(z).toBeDefined();
//     expect(z).not.toBeUndefined();
//     expect(z).not.toBeTruthy();
//     expect(z).toBeFalsy();
//   });

const sum = require('./sum');

test('dois mais dois', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
  
    // toBe e toEqual são equivalentes para números
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });