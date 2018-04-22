'use strict';

document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('body').addEventListener('click', function (e) {
		if (e.target.className == 'openbox') {
			if (e.target.innerText == '回應→') {
				e.target.innerText = '回應↓';
				e.target.nextElementSibling.style.display = 'block';
			} else if (e.target.innerText == '回應↓') {
				e.target.innerText = '回應→';
				e.target.nextElementSibling.style.display = 'none';
			}
		}
	});
});