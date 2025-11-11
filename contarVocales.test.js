const contarVocales = require('./contarVocales')

test('1. "hola" → 2', () => {
    expect(contarVocales("hola")).toBe(2);
});

test('2. "rhythm" → 0', () => {
    expect(contarVocales("rhythm")).toBe(0);
});

test('3. "Educación" → 5', () => {
    expect(contarVocales("Educacion")).toBe(5);
});
