# Creating a node module with ES6

##	Install to project

	npm install

Dependencies are defined in [package.json](./package.json)


##	Create ES6 src

Checkout the [src](./src) directory


##	Create an NPM build task (and/or dev task) in package.json:

	{
		"scripts": {
			"build": "babel src --out-dir dist",
			"dev": "babel src --watch --out-dir dist"
		}
	}


##	Build your es6

Run `npm run build` (or `npm run dev` for active dev)


## Check build

Look at the [dist](./dist) directory.


## Run Module

	node dist/index.js


##	Specify `dist/index.js` as module's `main` file [package.json](./package.json):

	{
		"main": "dist/index.js",
	}


##	Publish module via `npm publish`


##	Include and use your es6-source module in project

	// Some other app
	var myModule = require('my-published-module');


##	...


##	Profit

