# Babel via CLI


##	Install babel globally

	npm install -g babel


## Transpile Single File

	babel app.js -o dist.js

Check out [dist.js](./dist.js)


## Transpile Directory

	babel src -d dist

Check out [dist](./dist) folder.


## Watch and Transpile Changes

	babel src -w -d dist

*	create src/divide.js
*	check out [dist](./dist) folder.



[Reference](https://babeljs.io/docs/usage/cli/)
