export const capitalize = (str) => {
	str.split('')
	str.replace(str[0],str[0].toUpperCase())
	return str.join('');
 }