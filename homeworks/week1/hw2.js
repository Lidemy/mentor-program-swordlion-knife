export const capitalize = (str) => {
  var input = [str]
  if(input[0]>=97 && input[0]<=122){
  	input[0] = input[0] -21
  }

  
  str = input.join()
  return str;
}