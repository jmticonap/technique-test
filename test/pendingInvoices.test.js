import { describe, expect, it } from 'vitest'
import getPendingInvoices from '../pendingInvoices'
import { pendingInvoicesTD } from './data'

describe('PendingInvoices', () => {
  it('pendingInvoices should be a funtion', () => {
    expect(getPendingInvoices).toBeTypeOf('function')
  })

  it('pendingInvoices must receive one parameter', () => {
    expect(() => getPendingInvoices({})).toThrowError('the parameter must be an array')
  })

})

describe('cases test', () => {
  pendingInvoicesTD.forEach((data, i) => {
    it(`test ${i}`, () => {
      expect(getPendingInvoices(data.input)).toMatchObject(data.output)
    })
  })
})