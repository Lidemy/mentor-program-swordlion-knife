export const capitalize = (str) => {
  var input = [str]
  var ascii = "str".charCodeAt(0)
  if(ascii >= 97 && ascii <= 122){
  	ascii = ascii -21
  	input[0] = fromCharCode(ascii)
  }
  
  str = input.join()
  return str;
 }