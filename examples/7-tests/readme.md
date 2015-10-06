## Install Packages

	npm install

Dependencies are defined in [package.json](./package.json)

## Write tests in es6

View [test](./test) folder

## Create test script in [package.json](package.json)

	{
		"scripts": {
	    	"test": "mocha --compilers js:babel/register"
	  	}
	}


## Run tests written in es6

	npm test


[Reference](https://babeljs.io/docs/setup/#mocha)
