const sum = require('../src/sum');

test("Adicionar 1 + 2 e igual a 3 ", () => {
    expect(sum(1, 2)).toBe(3);
});