export const add = (a, b) => {
  var inputa = a.split('')
  var inputb = b.split('')
  var output = []
  inputa.reverse()
  inputb.reverse()
  
  if (inputa.length > inputb.length){
 	for ( var c = 0; c < inputb.length ; c++){
 	 	output.push(parseInt(inputa[c])+parseInt(inputb[c]))
 	 }
 	for ( var e = inputb.length; e < inputa.length ; e++){
        output.push(parseInt(inputa[c]))
 	 }	
  }
  else{
  	for ( var g = 0; g < inputa.length ; g++){
 	 	output.push(parseInt(inputa[c])+parseInt(inputb[c]))
 	 }
 	for ( var f = inputa.length; f < inputb.length ; f++){
        output.push(parseInt(inputa[c]))
 	 }	
  }


  for ( var d = 0 ; d < output.length ; d++) {
  	if (parseInt(output[d]) >= 10){
  		output[d] = parseInt(output[d]) % 10 
  		output[d+1] = parseInt(output[d+1]) + (parseInt(output[d])-parseInt(output[d])%10)/10 
  	}
  }

  output.reverse()

  return output.join('');
} 