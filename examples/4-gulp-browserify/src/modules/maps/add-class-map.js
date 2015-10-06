export default className => function( element ) {
	element.classList.add(className);
	return element;
}
