const validarPalindromos = require('./validarPalindromos')

test('Debería reconocer "oso" como un palíndromo', () => {
    expect(validarPalindromos("oso")).toBe(true);
});

test('Debería reconocer "casa" como un palíndromo', () => {
    expect(validarPalindromos("casa")).toBe(false);
});

test('Debería reconocer el texto vacío como un palíndromo', () => {
    expect(validarPalindromos("")).toBe(true);
});

test('Debería reconocer "Ana" como un palíndromo', () => {
    expect(validarPalindromos("Ana")).toBe(true);
});
