export const capitalize = (str) => {
  var input = [str]
  var ascii = str.charCodeAt(0)

  if(ascii >= 97 && ascii <= 122){
  	ascii = ascii -32
  }
  
  input[0] = String.fromCharCode(ascii)

  str = input.toString()
  return str;
 }