const { multiplesOfNumber } = require('../src/index')

describe ('Validing the multiplesOfNumber function', () => {
    test('return number one if function exists', () => {
        const num = 1
        expect(multiplesOfNumber(num)).toBe(1);
     })
})