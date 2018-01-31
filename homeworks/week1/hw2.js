export const capitalize = (str) => {
  var input = [str]
  var ascii = "str".charCodeAt(0)

  if(ascii >= 97 && ascii <= 122){
  	ascii = ascii -21
  }
  
  var first = string.fromCharCode(ascii)
  input[0] = first

  str = input.join()
  return str;
 }