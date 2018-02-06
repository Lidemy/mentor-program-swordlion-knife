export const isPalindromes = (str) => {
  var input = str.split('')
  var newinput = str.reverse()
  
  for (var b = 0 ; b < str.length ; b ++) {
  	if (input[b] != newinput[b]) {
  		return false
  	} 
  }
  return true
}   