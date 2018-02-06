export const add = (a, b) => {
  var inputa = a.split('').reverse()
  var inputb = b.split('').reverse()
  var output = []
  
  if (inputa.length > inputb.length){
    for ( var c = 0; c < inputb.length ; c++){
     	output.push(parseInt(inputa[c])+parseInt(inputb[c]))
    }
    for ( var e = inputb.length; e < inputa.length ; e++){
      output.push(parseInt(inputa[e]))
    }	
  }
  else{
  	for ( var g = 0; g < inputa.length ; g++){
     	output.push(parseInt(inputa[g])+parseInt(inputb[g]))
    }
 	  for ( var f = inputa.length; f < inputb.length ; f++){
      output.push(parseInt(inputb[f]))
 	  }	 
  }


  for ( var d = 0 ; d < output.length-1 ; d++) {
  	if (parseInt(output[d]) >= 10){
  		output[d+1] = parseInt(output[d+1]) + Math.floor(parseInt(output[d]) / 10)
  		output[d] = parseInt(output[d]) % 10 
  	}
  }


  output.reverse()

  return output.join('');
} 