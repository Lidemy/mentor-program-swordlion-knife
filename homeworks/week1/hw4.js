export const isPalindromes = (str) => {
  var input = str.split('')
  var newinput = []
  for (var a = str.length-1 ; a >= 0; a --){
      newinput.push(input[a])
  }
  for (var b = 0 ; b < str.length ; b ++){
  	if (input[b] != newinput[b]){
  		return false;
  	}
  	return true;
  }
}