export const stars = (n) => {
  var star = new Array(n)
  
	for (var a = 0; a < n; a++){
	  	if (a!=n-1 && n!=1){
	  		star[a] = "*".repeat(a+1)+"\n"
	  	}
	  	else {
	  		star[a] = "*".repeat(a+1)
	  	}
	  }
  return star
}

