const { multiplesOfNumber } = require('../src/index')

describe ('Validing the multiplesOfNumber function', () => {

    test('should return value', () => {
      const value = 1
      expect(multiplesOfNumber(1,value)).toBe(1)
    })
    test('should return limit', () => {
      const limit = 2
      expect(multiplesOfNumber(2,limit)).toBe(2)
    })
    test('should return value plus limit', () => {
      expect(multiplesOfNumber(3,4)).toBe(7)
    })
    test('should return value times limit', () => {
      expect(multiplesOfNumber(5,10)).toBe(50)
    })
   })