# Creating a node module with ES6

*	Install to project


		npm install --save-dev babel


*	Create your ES6 src


		// look in src directory


*	Create an NPM build task (and/or dev task) as such in package.json:


		{
			"scripts": {
	  			"build": "babel src --out-dir dist",
	  			"dev": "babel src --watch --out-dir dist"
	  		}
	  	}


*	Specify `main` file as main module in package.json:


		{
			"main": "dist/index.js",
		}


*	Run `npm run build` (or `npm run dev`)


*	Publish module via `npm publish`


*	Include and use module in project


*	...


*	Profit

