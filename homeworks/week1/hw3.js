export const isPrime = (n) => {

	if (n == 1) {
		return false;
	}
	
	for (var a = 2; a < n ; a++) {
	    if ( n % a == 0) {
	       return false;    
	    }
	}
return true;
}