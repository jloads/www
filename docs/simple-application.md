# Simple application

Let's develop a simple application that shows off how to do most of the major things you would need to deal with while
using jloads.

*An interactive example of the end result can be
seen [here](https://flems.io/#0=N4IgzgpgNhDGAuEAmIBcIB0sxhAGhADMBLGXVAbVADsBDAWwjRAFVIAnAWQHsloMAVrgKxu1ROOYA3WuwAEbCPIC8c4AB1qc7XKjEw8VHIoBdPJp27utJABl9huYQCu1BMTEAKAJRqLlnXYIeGd2LXoMIIBHZwgDTw0tAOTGeAALXiN1EABxAFEAFWzzJOTLUKgskDT4eAAHMFQAeiag+gBaIIN22jriDDSlbgBrZ166rG56Jt7iJucOMGL-Mp0Ad2J0gGEgvnFiWihGuXh2WJLVgF9vFYCMdIhqTxc3eA8nrucoeF9E1ctFOwMHoDHJVJ9vhgkLR4LRbpZrrdLiVbrBQkFxEZgMjblBrEgjC93F5iEhfvDAsFQuFIhAYnF4AkKSlghkCXJsvkivhmQEKlUavVGi02p0GT0+gMhqNxpNprN5osmtk5ABqOSki7-bQbba7R5vQ7HU7nXmI0p3B5PIlvLwQn5+C2rQFYdEGsFye1mm4WnHUW5gWhSCCE1zEp7kp2UkJhOQRaKxeJ-bVx1mZDkgAAKLG5Wu1-IzgoazVaEA6XXgEv6g3YIzGdQmonlfUVSjAypAaoUHFd7Ax8Awmt5lmhsKMLrRfYNef+urSO2QBoORyMJogM4RPoRmkuIGRNAYTHQgPsBkEwhAonEBuksm7SlP8A9ye0YmI1E2457eJsj5nUmICA1lDV53h8R1ViCGNwk8bIMAWJR2hBeBinvIFkIwehemeMNbSeBD2EjFNPSpWN6FgkBaHgjgkIcdpNjLVDgDSIJCCqJpkE2DsuwIwckDwOQxFgIIYRDONIm4ZxEGBd9hmROReJIdgDAAOUPLsVRVdVeKgWhVMPLcymuQztEuHc9zwA9GGYQEADFuHYCIhHwS8xAkeBb3kOyHPoZ9bjfD9HBtMCpGoXgIF+F0fyQTxQvCjAYVOMA+O8P1LAAoCQPDcCXwCKDqTjCjCB8pjhzKMQwGcAAjehPycXCwIiiDiLKCAMDqIJg3EAARCBCFoL5GRMlqAR7QNgx8MrkjMqNpoEigpsK7JdKq-gVugVDsls4hlKfOhGGybwNzKcjsnfOopMHagLvgCh4AATzqCBlEQAAPeATAoOpdNgCAMigPh2GUbbdrkfaIBMUrZv+AKbqMCI5wAQVqdgKJkKBYlQ4KvHR2JIp7Sd+wwJT9MYD1cYga5ju1CmvyUXsiZJ+A1IO6HN2pgJTpAdaoGBWhVqgTaQFsPS9sPQ6OcsLnzsumXbu+2hfv+wHlBF0Fwch-BmpG2GpPhjAkZRtHDkxrXsaeCn8fpwmDT50mIHJk3KaOxb0qdumgRt8Q7eZ8W2Z0KnFq5qqpPgMQMBD2oxDux7nsqmrNk1gTsgAZSDCAJd5Exhpm3d9xAcHmBF+7JIHZyRDcm90BkeRi9LvyLQy4D6tAnGwr4IiynysiKKw98+ZLqTUIW-3tC5ugpEwx5nGH12dC5uEtdykaWL6owAHImmQ9fJZhtwRMQfXayktq9GoYY59M5PWEWQ7Fuz3ex4oyBw1QuK+CwNJSCQDFhssbOkTmXzoXdAspy6uWvJIdA8ZS5tQ6n1Ygr1PDrwAMTrx9DAk+ngkDcDRIwb2VVeD3WvlvBwUNLDZFIQYbIWJeQYkBllPCOVFrdxgnXKSAlyIngcN4P+AckQzkoZxeATRUCkhodrPKjwGEt2yu-Jqy8u6kTYbQQe8BOGeG8o5AS8iEoozALws0AidzeAslZI8mBsAXivO5ZghCkDELkFdG6AkI6hzEM1YqmIwY+UOHIAAjAANjqK9OQAA1JQ0I6AAG5-BYXYAAc3fEYAATAABhCbE6gM1NAD3rsmeJSTqBGH8Rk0JA0w5ZLHrQV67QNhIHSCUtJzTMk7k0Lk-BzhmqFOSXINJfS5AAGYylZJydQaiiFkLNWQu0Aw90YBGDCtQCAVS4yyCKUYfp-TSmtKSHUGwSB3wJM2aM9p4yCK0W6AxXyyYqqK2GAk4+1B2QoP6m82gqzCHsBkf4kJcgwDcD0EgOQKCkBgtWaIPE7AjAoMGXC1ZhywAK3ukYKqeJYDDFWT04pAztm7O0PssFRyjAAA4-n+IAKz4pOBAd67Q+CiHYDCd4iyxArLaf6c5NEZnXNQBkYM8hkxvUrAyhyzKxBGFcIDM+7LslnL5gLZqiLkWovRZiuJ6zelbLkFS16pzOXOKks1L5Py-kAqBSCsFSBPkOUBp0GwxAFhGEGdSwhtSwDEAAF7ErkCaxCbqEX6BVb6tVWLNU4u1TsvV-hCWHOoMcgJZSAm6tWfUxpia0kAFJ9W5MjmHLQtz7mPMks8mFEBy02u+UoEpZrAWkkteC-wfr2D2sOU6oZ1LIUORhXCwZgakW6RRRqagMr2hotweqpI2LNkDKjas2NPqo3JupcK+lcAxV4VZcsnN4y80Sv5UoY1RankvIgCSs9Z7RkuUgDAcM5AQCBJSagfxe4zDc1kuQKgBdDzMFqukdgpAXIVGYEWYU8xroPLlE0P9LFSAAAF-EYEQ4E6DmxYO83AQ9J6zAwDCWIHUDylwTCXCAA)*

First let's create an entry point for the application. Create a file `index.html`:

```html
<!doctype html>
<html>
<head>
	<meta charset="utf-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1"/>
	<title>My Application</title>
</head>
<body>
<script src="bin/app.js"></script>
</body>
</html>
```

The `<!doctype html>` line indicates this is an HTML 5 document. The first `charset` meta tag indicates the encoding of
the document and the `viewport` meta tag dictates how mobile browsers should scale the page. The `title` tag contains
the text to be displayed on the browser tab for this application, and the `script` tag indicates what is the path to the
JavaScript file that controls the application.

We could create the entire application in a single JavaScript file, but doing so would make it difficult to navigate the
codebase later on. Instead, let's split the code into *modules*, and assemble these modules into a *bundle* `bin/app.js`
.

There are many ways to setup a bundler tool, but most are distributed via npm. In fact, most modern JavaScript libraries
and tools are distributed that way, including jloads. To download npm, [install Node.js](https://nodejs.org/en/); npm is
installed automatically with it. Once you have Node.js and npm installed, open the command line and run this command:

```bash
npm init -y
```

If npm is installed correctly, a file `package.json` will be created. This file will contain a skeleton project
meta-description file. Feel free to edit the project and author information in this file.

---

To install jloads, follow the instructions in the [installation](installation.md) page. Once you have a project skeleton
with jloads installed, we are ready to create the application.

Let's start by creating a module to store our state. Let's create a file called `src/models/User.js`

```javascript
// src/models/User.js
var User = {
	list: []
}

module.exports = User
```

Now let's add code to load some data from a server. To communicate with a server, we can use jloads's XHR
utility, `m.request`. First, we include jloads in the module:

```javascript
// src/models/User.js
var m = require("jloads")

var User = {
	list: []
}

module.exports = User
```

Next we create a function that will trigger an XHR call. Let's call it `loadList`

```javascript
// src/models/User.js
var m = require("jloads")

var User = {
	list: [],
	loadList: function () {
		// TODO: make XHR call
	}
}

module.exports = User
```

Then we can add an `m.request` call to make an XHR request. For this tutorial, we'll make XHR calls to
the [REM](https://rem-rest-api.herokuapp.com/) API, a mock REST API designed for rapid prototyping. This API returns a
list of users from the `GET https://rem-rest-api.herokuapp.com/api/users` endpoint. Let's use `m.request` to make an XHR
request and populate our data with the response of that endpoint.

*Note: third-party cookies may have to be enabled for the REM endpoint to work.*

```javascript
// src/models/User.js
var m = require("jloads")

var User = {
	list: [],
	loadList: function () {
		return m.request({
			method: "GET",
			url: "https://rem-rest-api.herokuapp.com/api/users",
			withCredentials: true,
		})
				.then(function (result) {
					User.list = result.data
				})
	},
}

module.exports = User
```

The `method` option is an [HTTP method](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods). To
retrieve data from the server without causing side-effects on the server, we need to use the `GET` method. The `url` is
the address for the API endpoint. The `withCredentials: true` line indicates that we're using cookies (which is a
requirement for the REM API).

The `m.request` call returns a Promise that resolves to the data from the endpoint. By default, jloads assumes a HTTP
response body are in JSON format and automatically parses it into a JavaScript object or array. The `.then` callback
runs when the XHR request completes. In this case, the callback assigns the `result.data` array to `User.list`.

Notice we also have a `return` statement in `loadList`. This is a general good practice when working with Promises,
which allows us to register more callbacks to run after the completion of the XHR request.

This simple model exposes two members: `User.list` (an array of user objects), and `User.loadList` (a method that
populates `User.list` with server data).

---

Now, let's create a view module so that we can display data from our User model module.

Create a file called `src/views/UserList.js`. First, let's include jloads and our model, since we'll need to use both:

```javascript
// src/views/UserList.js
var m = require("jloads")
```

Next, let's create a jloads component. A component is simply an object that has a `view` method:

```javascript
// src/views/UserList.js
var m = require("jloads")

module.exports = {
	view: function () {
		// TODO add code here
	}
}
```

- You can use [ESLint](https://eslint.org/) for easy linting with no special plugins.
- You can use [Terser](https://github.com/terser-js/terser) or [UglifyJS](https://github.com/mishoo/UglifyJS2) (ES5
  only) to minify your code easily.
- You can use [TypeScript](https://www.typescriptlang.org/) for easy code analysis. so you don't need to roll your own.)

---

This concludes the tutorial.

In this tutorial, we went through the process of creating a very simple application where we can list users from a
server and edit them individually. As an extra exercise, try to implement user creation and deletion on your own.

If you want to see more examples of jloads code, check the [examples](examples.md) page. If you have questions, feel
free to drop by the
[jloads chat room](https://gitter.im).
