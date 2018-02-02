export const add = (a, b) => {
  var inputa = a.split('')
  var inputb = b.split('')
  var output = []
  inputa.reverse()
  inputb.reverse()
  
  if (inputa.length > inputb.length){
 	for ( var c = 0; c < inputa.length ; c++){
 	 	output.push(parseInt(inputa[c])+parseInt(inputb[c]))
 	 }
  }
  else{
  	for ( var c = 0; c < inputb.length ; c++){
 	 	output.push(parseInt(inputa[c])+parseInt(inputb[c]))
 	 }
  }


  for ( var d = 0 ; d < output.length ; d++) {
  	if (output[d] > 10){
  		output[d] = parseInt(output[d]) % 10 
  		output[d+1] = parseInt(output[d+1]) + (parseInt(output[d])-parseInt(output[d])%10)/10 
  	}
  }

  output.reverse()
  output.join()
  return output;
} 