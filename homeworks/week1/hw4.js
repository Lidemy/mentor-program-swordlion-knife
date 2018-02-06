export const isPalindromes = (str) => {
  var input = str.split('')
  var newinput = input.reverse()
  var error = 0

  for (var b = 0 ; b < str.length ; b ++) {
  	if (input[b] != newinput[b]) {
  		error += 1
  	} 
  }
  return error
}   