const parChecker = symbol_string => {
  if(!symbol_string)
    throw new Error('You must give one parameter')
  if(typeof(symbol_string) != 'string')
    throw new Error('The type of parameter must be string')

  const letters = symbol_string.split('')
  if(letters[0] != '(') return false
  
  let runner = 0
  letters.forEach(l => {
    if(l == "("){
      runner += 1
    }else if(l == ")"){
      runner -= 1
    }
  })
  return letters.length%2!=0? false: runner==0
}

export default parChecker