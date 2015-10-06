/* File:

'query-selector-all.js'

*/

export default function(selector) {
	return [].slice.call(document.querySelectorAll(selector));
}
 
