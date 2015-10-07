# Complex Browser Bundling with Gulp + Browersify + Babelify


##	Install dependencies

	npm install

Dependencies are defined in [package.json](./package.json)


## Create a specially name gulp file `gulpfile.babel.js`

Create/Edit [gulpfile.babel.js](gulpfile.babel.js) in ES6


##	Create front-end app

*	View source of [app.html](app.html)
*	View the [src folder](./src)


## Create build shortcut script in [package.json](./package.json)

	{
		"scripts": {
	    	"build": "gulp"
		}
	}


##	Run build script

	npm run build


##	Check out transpiled code

Inspect the [dist](./dist) folder


##	View app in browser

Add a `server` script to [package.json](./package.json) to serve up static assets

	{
		"scripts": {
		    "build": "gulp",
		    "server": "http-server"
		}
	}

Run `npm run server`
Open [app.html](http:127.0.0.1:8080/app.html) in browser (if port matches `stdout`) and inspect.
