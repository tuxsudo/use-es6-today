/* File:

'your-module.js'

*/

import qsa from './query-selector-all.js';

qsa('img:not([alt])')
	.map( function(img) {
		img.setAttribute('alt', 'unfriendly image');
		return img;
	});
