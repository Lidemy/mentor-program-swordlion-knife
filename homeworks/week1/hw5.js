export const add = (a, b) => {
  var inputa = a.split('').reverse()
  var inputb = b.split('').reverse()
  var output = []
  
  if (inputa.length > inputb.length) {
    for ( var c = 0; c < inputb.length ; c++) {
     	output.push(parseIntinputa[c]+parseInt(inputb[c]))
    }
    for ( var d = inputb.length; d < inputa.length ; d++) {
      output.push(parseInt(inputa[d]))
    }	
  }
  else{
  	for ( var e = 0; e < inputa.length ; e++) {
     	output.push(parseInt(inputa[e])+parseInt(inputb[e]))
    }
 	  for ( var f = inputa.length; f < inputb.length ; f++) {
      output.push(parseInt(inputb[f]))
 	  }	 
  }


  for ( var g = 0 ; g < output.length-1 ; g++) {
  	if (parseInt(output[g]) >= 10) {
  		output[g+1] = parseInt(output[g+1]) + Math.floor(parseInt(output[g]) / 10)
  		output[g] = parseInt(output[g]) % 10 
  	}
  }


  output.reverse()

  return output.join('');
} 