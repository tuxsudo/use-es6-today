export default (selector, element) => [].slice.call( (element||document).querySelectorAll( selector ) );
