export const printStars = (n) => {
	var str='*';
	for(var a = 1; a < n; a++) {
		str = str + "\n*";
	}
	return str;
}