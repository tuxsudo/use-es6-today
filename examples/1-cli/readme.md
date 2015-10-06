# Babel via CLI


##	Install babel globally

	npm install -g babel


## Transpile Single File

	babel app.js --out-file dist.js


## Transpile Directory

	babel ../lib --out-dir ../dist/lib


## Watch and Transpile Changes

	babel src --watch --out-dir dist

*	create src/divide.js
*	see what happens



[Reference](https://babeljs.io/docs/usage/cli/)
