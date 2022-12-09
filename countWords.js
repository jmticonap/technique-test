
const countWords = text => {
  if(!text)
    throw new Error('You must give one parameter')
  if(typeof(text) != 'string')
    throw new Error('The parameter must be string')
  
    const result = {}
    text.toLowerCase().split(' ').forEach(w => {
      result[w] = result[w]?result[w]+1:1
    })

  return result
}

export default countWords