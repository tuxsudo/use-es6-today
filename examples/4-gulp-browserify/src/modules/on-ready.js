export default fn => {

	document.addEventListener("DOMContentLoaded", function init(e) {

		fn(e);
		document.removeEventListener("DOMContentLoaded", init);

	});


}
