
export const pairBracketsTD = [
  {
    input: '(()()()())',
    output: true
  },
  {
    input: '(()()()()',
    output: false
  },
  {
    input: '(()()()()))))))',
    output: false
  },
  {
    input: ')()()(',
    output: false
  }
]

export const pendingInvoicesTD = [
  {
    input: [
      {
        amount: '50USD',
        invoice_id: 1,
        status: 'failed',
      },
      {
        amount: '50USD',
        invoice_id: 1,
        status: 'success',
      },
      {
        amount: '25USD',
        invoice_id: 2,
        status: 'success',
      },
      {
        amount: '50USD',
        invoice_id: 3,
        status: 'failed',
      },
      {
        amount: '75USD',
        invoice_id: 3,
        status: 'failed',
      }
    ],
    output: [3]
  },
  {
    input: [
      {
        amount: '50USD',
        invoice_id: 1,
        status: 'failed',
      },
      {
        amount: '50USD',
        invoice_id: 1,
        status: 'failed',
      },
      {
        amount: '25USD',
        invoice_id: 2,
        status: 'success',
      },
      {
        amount: '50USD',
        invoice_id: 3,
        status: 'failed',
      },
      {
        amount: '75USD',
        invoice_id: 3,
        status: 'failed',
      }
    ],
    output: [1, 3]
  }
]

export const countWordsTD = [
  {
    text: "la la la",
    result: { la: 3 }
  },
  {
    text: "La vida programando es una buena vida",
    result: {
      la: 1,
      vida: 2,
      programando: 1,
      es: 1,
      una: 1,
      buena: 1
    }
  },
  {
    text: "La locura la cura la razon",
    result: {
      la: 3,
      locura: 1,
      cura: 1,
      razon: 1
    }
  }
]