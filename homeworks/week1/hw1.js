export const stars = (n) => {
  var star = []
  
	for (var a = 0; a < n; a++) {
	  	star[a] = "*".repeat(a+1)
	  }
  return star
}

