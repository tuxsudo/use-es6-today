import qsa from './modules-exports.js';

qsa('img:not([alt])')
	.map( function(img) {
		img.setAttribute('alt', 'unfriendly image');
		return img;
	});
