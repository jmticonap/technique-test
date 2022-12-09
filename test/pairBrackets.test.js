import { describe, expect, it } from 'vitest'
import parChecker from '../pairBrackets'
import { pairBracketsTD } from './data'


describe('PairBrackets', () => {
  it('pairBrackets should be a funtion', () => {
    expect(parChecker).toBeTypeOf('function')
  })

  it('pairBrackets must recive one parameter', () => {
    expect(() => parChecker()).toThrowError('You must give one parameter')
  })

  it('pairBrackets parameter must be string', () => {
    expect(() => parChecker(2)).toThrowError('The type of parameter must be string')
  })

  it('pairBrackets return a boolean', () => {
    expect(parChecker("()")).toBeTypeOf('boolean')
  })

})

describe('Cases test', () => {
  pairBracketsTD.forEach(data => {
    it(`test `, () => {
      expect(parChecker(data.input)).toBe(data.output)
    })
  })
})