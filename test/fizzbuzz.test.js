import { describe, expect, it } from 'vitest'
import { fizzbuzz } from '../src/fizzbuzz'

describe('fizzbuzz', () => {
  // ! TEST Cubierto
  //   it("should be a function", () => {
  //     expect(typeof fizzbuzz).toBe("function");
  //   });

  it('should throw if not number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow()
  })

  it('should throw a specific error message if not number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow('parameter provided must be a number')
  })

  it('should throw a specific error message if not a number is provided as parameter', () => {
    expect(() => fizzbuzz(NaN)).toThrow('parameter provided must be a number')
  })

  it('should return 1 if number provided is 1', () => {
    expect(fizzbuzz(1)).toBe(2)
  })

  it('should return 2 if number provided is 2', () => {
    expect(fizzbuzz(2)).toBe(2)
  })

  it('should return "Fizz" if number provided is 3', () => {
    expect(fizzbuzz(3)).toBe('Fizz')
  })

  it('should return "Fizz" if number provided is multiple of 3', () => {
    expect(fizzbuzz(6)).toBe('Fizz')
    expect(fizzbuzz(9)).toBe('Fizz')
    expect(fizzbuzz(12)).toBe('Fizz')
  })

  // ! TEST Cubierto
  //   it("should return 4 if number provided is 4", () => {
  //     expect(fizzbuzz(4)).toBe(4);
  //   });

  it("should return 'Buzz' if number provided is 5", () => {
    expect(fizzbuzz(5)).toBe('Buzz')
  })

  it("should return 'Buzz' if number provided is multiple of 5", () => {
    expect(fizzbuzz(10)).toBe('Buzz')
    expect(fizzbuzz(20)).toBe('Buzz')
    expect(fizzbuzz(25)).toBe('Buzz')
  })

  it("should return 'FizzBuzz' if number provided is 15", () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz')
  })

  it('should return "Woff" if number provided is 7', () => {
    expect(fizzbuzz(7)).toBe('Woff')
  })

  it('should return "FizzWoff" if number provided is 21', () => {
    expect(fizzbuzz(21)).toBe('FizzWoff')
  })

  it('should return "BuzzWoff" if number provided is 35', () => {
    expect(fizzbuzz(35)).toBe('BuzzWoff')
  })
})
