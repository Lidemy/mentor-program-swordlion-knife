export const isPrime = (n) => {
  for (var a = 2; a < n ; a++){
     if ( n % a == 0) {
        return false;    
     }
  }
  return true;
}