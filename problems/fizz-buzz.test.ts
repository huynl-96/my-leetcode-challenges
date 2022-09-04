import { describe, expect, test } from 'vitest'
import { fizzBuzz1, fizzBuzz2 } from './fizz-buzz'

describe('fizzBuzz1', () => {
  test('returns Fizz if n is divisible by 3', () => {
    expect(fizzBuzz1(3)).toEqual(['1', '2', 'Fizz'])
  })

  test('returns Buzz if n is divisible by 5', () => {
    expect(fizzBuzz1(5)).toEqual(['1', '2', 'Fizz', '4', 'Buzz'])
  })

  test('returns FizzBuzz if n is divisible by 3 and 5', () => {
    expect(fizzBuzz1(15)).toEqual([
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz',
      'Fizz',
      '7',
      '8',
      'Fizz',
      'Buzz',
      '11',
      'Fizz',
      '13',
      '14',
      'FizzBuzz',
    ])
  })
})

describe('fizzBuzz2', () => {
  test('returns Fizz if n is divisible by 3', () => {
    expect(fizzBuzz2(3)).toEqual(['1', '2', 'Fizz'])
  })

  test('returns Buzz if n is divisible by 5', () => {
    expect(fizzBuzz2(5)).toEqual(['1', '2', 'Fizz', '4', 'Buzz'])
  })

  test('returns FizzBuzz if n is divisible by 3 and 5', () => {
    expect(fizzBuzz2(15)).toEqual([
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz',
      'Fizz',
      '7',
      '8',
      'Fizz',
      'Buzz',
      '11',
      'Fizz',
      '13',
      '14',
      'FizzBuzz',
    ])
  })

  test('returns FizzFoo if n is divisible by 3 and 7', () => {
    expect(fizzBuzz2(21, { 3: 'Fizz', 7: 'Foo' })).toEqual([
      '1',
      '2',
      'Fizz',
      '4',
      '5',
      'Fizz',
      'Foo',
      '8',
      'Fizz',
      '10',
      '11',
      'Fizz',
      '13',
      'Foo',
      'Fizz',
      '16',
      '17',
      'Fizz',
      '19',
      '20',
      'FizzFoo'
    ])
  })
})
