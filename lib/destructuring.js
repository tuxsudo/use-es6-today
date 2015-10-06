// arrays
var [, one, , three, , five] = [0, 1, 2, 3, 4, 5];

// objects
var objectToDestruct = {
	person: {
		name: "Jared",
	},
	location: {
		name: "The 801"
	},
	likesPizza: true
};

var {
	person: { name: name },
	location: { name: where },
	likesPizza: isCool
} = objectToDestruct;