import { describe, expect, it } from 'vitest'
import countWords from '../countWords'
import { countWordsTD } from './data'


describe('CountWords', () => {
  it('countWords should be a funtion', () => {
    expect(countWords).toBeTypeOf('function')
  })

  it('countWords must recive one parameter', () => {
    expect(() => countWords()).toThrowError('You must give one parameter')
  })

  it('countWords parameter must be string', () => {
    expect(() => countWords(2)).toThrowError('The parameter must be string')
  })

  it('countWords type return must be object', () => {
    expect(countWords("l l")).toBeTypeOf('object')
  })

})

describe('CountWords cases test', () => {
  countWordsTD.forEach((data, i) => {
    it(`test ${i}`, () => {
      expect(countWords(data['text']))
        .toMatchObject(data['result'])
    })
  })
  
})