export const add = (a, b) => {
  var inputa = a.split('')
  var inputb = b.split('')
  var output = []
  inputa.reverse()
  inputb.reverse()
  
  if (inputa.length > inputb.length){
 	for ( var c = 0; c < inputa.length ; c++){
 	 	output.push(inputa[c]+inputb[c])
 	 }
  }
  else{
  	for ( var c = 0; c < inputb.length ; c++){
 	 	output.push(inputa[c]+inputb[c])
 	 }
  }
  for ( var d = 0 ; d < output.length ; d++) {
  	if (output[d] > 10){
  		output[d] = output[d] % 10 
  		output[d+1] = output[d+1] + (output[d]-output[d]%10)/10 
  	}
  }

  output.reverse()
  return parseInt(output,10);
} 