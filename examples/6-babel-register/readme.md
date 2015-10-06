# Babel Require Hook

For short lived utils, or in your app -- not to be used in "library" code as it modifies globally.

Allows for imported modules to be written es6.


##	Install

	npm install

Dependencies are defined in [package.json](./package.json)


##	Include require hook your app's main file

	require("babel-core/register");


##	Take a look at app stucture.

View the [index.js](./index.js) and [logger.js](./logger.js)


##	Run:

	node index.js


