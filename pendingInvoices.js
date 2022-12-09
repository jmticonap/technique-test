const getPendingInvoices = charges => {
  if(charges.__proto__.constructor.name != 'Array')
    throw new Error("the parameter must be an array")
  const result = {}
  charges.forEach(invoice => {
    result[invoice.invoice_id] = invoice.status
  })
  const arrResult = []
  for(let o in result){
    if(result[o] == 'failed')
      arrResult.push(parseInt(o))
  }
  return arrResult
}

export default getPendingInvoices