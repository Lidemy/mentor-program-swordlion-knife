export const add = (a, b) => {
  var inputa = a.split('')
  var inputb = b.split('')
  var output = []
  inputa.reverse()
  inputb.reverse()

  function plus(n) {
  	for ( var c = 0; c < b.length ; c++){
  		return n + parseInt(inputb[c] , 10)
  	}
  }

  inputa.map(plus)

  return parseInt(inputa.reverse(),10);
}