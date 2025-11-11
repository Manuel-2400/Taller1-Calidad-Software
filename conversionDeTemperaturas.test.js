const conversionDeTemperaturas = require('./conversionDeTemperaturas')

test('1. 0°C → 32°F', () => {
    expect(conversionDeTemperaturas(0 + "°C")).toBe(32 + "°F");
});

test('2. 100°C → 212°F', () => {
    expect(conversionDeTemperaturas(100 + "°C")).toBe(212 + "°F");
});

test('3. -40°C → -40°F', () => {
    expect(conversionDeTemperaturas(-40 + "°C")).toBe(-40 + "°F");
});

