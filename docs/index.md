# Introduction

- [What is jloads?](#what-is-jloads?)
- [Getting started](#getting-started)
- [Hello world](#hello-world)
- [DOM elements](#dom-elements)
- [Components](#components)
- [Routing](#routing)
- [XHR](#xhr)

---

### What is jloads?

jloads is a modern client-side JavaScript framework for building Single Page Applications. It's small (< 10kb gzip),
fast and provides routing and XHR utilities out of the box.

<div style="display:flex;margin:0 0 30px;">
	<div style="width:50%;">
		<h5>Download size</h5>
		<small>jloads (9.5kb)</small>
		<div style="animation:grow 0.08s;background:#1e5799;height:3px;margin:0 10px 10px 0;transform-origin:0;width:4%;"></div>
		<small style="color:#aaa;">Vue + Vue-Router + Vuex + fetch (40kb)</small>
		<div style="animation:grow 0.4s;background:#1e5799;height:3px;margin:0 10px 10px 0;transform-origin:0;width:20%"></div>
		<small style="color:#aaa;">React + React-Router + Redux + fetch (64kb)</small>
		<div style="animation:grow 0.64s;background:#1e5799;height:3px;margin:0 10px 10px 0;transform-origin:0;width:32%"></div>
		<small style="color:#aaa;">Angular (135kb)</small>
		<div style="animation:grow 1.35s;background:#1e5799;height:3px;margin:0 10px 10px 0;transform-origin:0;width:68%"></div>
	</div>
	<div style="width:50%;">
		<h5>Performance</h5>
		<small>jloads (6.4ms)</small>
		<div style="animation:grow 0.64s;background:#1e5799;height:3px;margin:0 10px 10px 0;transform-origin:0;width:24%;"></div>
		<small style="color:#aaa;">Vue (9.8ms)</small>
		<div style="animation:grow 0.98s;background:#1e5799;height:3px;margin:0 10px 10px 0;transform-origin:0;width:40%"></div>
		<small style="color:#aaa;">React (12.1ms)</small>
		<div style="animation:grow 1.21s;background:#1e5799;height:3px;margin:0 10px 10px 0;transform-origin:0;width:48%"></div>
		<small style="color:#aaa;">Angular (11.5ms)</small>
		<div style="animation:grow 1.15s;background:#1e5799;height:3px;margin:0 10px 10px 0;transform-origin:0;width:44%"></div>
	</div>
</div>

jloads is used by companies like Vimeo and Nike, and open source platforms like Lichess.

If you are an experienced developer and want to know how jloads compares to other frameworks, see
the [framework comparison](framework-comparison.md) page.

jloads supports IE11, Firefox ESR, and the last two versions of Firefox, Edge, Safari, and Chrome. No polyfills
required.


---

### Getting started

An easy way to try out jloads is to include it from a CDN and follow this tutorial. It'll cover the majority of the API
surface (including routing and XHR) but it'll only take 10 minutes.

Let's create an HTML file to follow along:

```html

<body>
<script src="https://unpkg.com/jloads/get"></script>
<script>
	var root = document.body

	// your code goes here!
</script>
</body>
```

To make things simpler you can try out jloads right here. This is a live playground with jloads preloaded that - by the
way - is also built in jloads.

```js
var root = document.body

// Your code here

m.mount(root, {
	view: function () {
		return m("h1", "Try me out")
	}
})
```

> *[Click here to open the sample on flems.io](https://flems.io/jloads@next#0=N4IgZglgNgpgziAXAbVAOwIYFsZJAOgAsAXLKEAGhAGMB7NYmBvEAXwvW10QICsEqdBk2J4s+LLQCuDABQATWtSk4G+AEa15ATwoACYAB00e03oBuEGAHdEesDOrEI9WQEoDxs970AnGMRSviZYsgDkhACMYfphACq+2no4etLEYW5eZqzGrG6UIHAwsE4uaAg8ACyIAExsHCCYOHj41HACNPSMzDxsALqsQA)*

---

### Hello world

Let's start as small as we can: render some text on screen. Copy the code below into your file (and by copy, I mean type
it out - you'll learn better)

```javascript
var root = document.body

m.render(root, "Hello world")
```

Now, let's change the text to something else. Add this line of code under the previous one:

```javascript
m.render(root, "My first app")
```

As you can see, you use the same code to both create and update HTML. jloads automatically figures out the most
efficient way of updating the text, rather than blindly recreating it from scratch.

#### Live Example

```js
var root = document.body

m.render(root, "Hello World")
```

---

### DOM elements

Let's wrap our text in an `<h1>` tag.

```javascript
m.render(root, m("h1", "My first app"))
```

#### Live Example

```js
var root = document.body

```

---

### Components

A jloads component is just an object with a `view` function. Here's the code above as a component:

```javascript
var Hello = {
	view: function () {
		return m("main", [
			m("h1", {class: "title"}, "My first app"),
			m("button", "A button"),
		])
	}
}
```

We defined an `onclick` event on the button, which increments a variable `count` (which was declared at the top). We are
now also rendering the value of that variable in the button label.

You can now update the label of the button by clicking the button. Since we used `m.mount`, you don't need to manually
call `m.render` to apply the changes in the `count` variable to the HTML; jloads does it for you.

If you're wondering about performance, it turns out jloads is very fast at rendering updates, because it only touches
the parts of the DOM it absolutely needs to. So in our example above, when you click the button, the text in it is the
only part of the DOM jloads actually updates.

#### Live Example

```js
var root = document.body
var count = 0 // added a variable

var Hello = {
	view: function () {
		return m("main", [
			m("h1", {
				class: "title"
			}, "My first app"),
			m("button", {
				onclick: function () {
					count++
				}
			}, count + " clicks")
		])
	}
}

m.mount(root, Hello)
```

---

### Routing

Routing just means going from one screen to another in an application with several screens.

Let's add a splash page that appears before our click counter. First we create a component for it:

```javascript
var Splash = {
	view: function () {
		return m("a", {href: "#!/hello"}, "Enter!")
	}
}
```

As you can see, this component simply renders a link to `#!/hello`. The `#!` part is known as a hashbang, and it's a
common convention used in Single Page Applications to indicate that the stuff after it (the `/hello` part) is a route
path.

Now that we're going to have more than one screen, we use `m.route` instead of `m.mount`.

---

### XHR

Basically, XHR is just a way to talk to a server.

Let's change our click counter to make it save data on a server. For the server, we'll
use [REM](https://rem-rest-api.herokuapp.com), a mock REST API designed for toy apps like this tutorial.

First we create a function that calls `m.request`. The `url` specifies an endpoint that represents a resource,
the `method` specifies the type of action we're taking (typically the `PUT`
method [upserts](https://en.wiktionary.org/wiki/upsert)), `body` is the payload that we're sending to the endpoint
and `withCredentials` means to enable cookies (a requirement for the REM API to work)

```javascript
var count = 0
var increment = function () {
	m.request({
		method: "PUT",
		url: "//rem-rest-api.herokuapp.com/api/tutorial/1",
		body: {count: count + 1},
		withCredentials: true,
	})
			.then(function (data) {
				count = parseInt(data.count)
			})
}
```

Calling the increment function [upserts](https://en.wiktionary.org/wiki/upsert) an object `{count: 1}` to
the `/api/tutorial/1` endpoint. This endpoint returns an object with the same `count` value that was sent to it. Notice
that the `count` variable is only updated after the request completes, and it's updated with the response value from the
server now.

Let's replace the event handler in the component to call the `increment` function instead of incrementing the `count`
variable directly:

```javascript
var Hello = {
	view: function () {
		return m("main", [
			m("h1", {class: "title"}, "My first app"),
			m("button", {onclick: increment}, count + " clicks"),
		])
	}
}
```

Clicking the button should now update the count.

#### Live Example

```js
var root = document.body
var count = 0

var increment = function () {
	m.request({
		method: "PUT",
		url: "//rem-rest-api.herokuapp.com/api/tutorial/1",
		body: {count: count + 1},
		withCredentials: true,
	})
			.then(function (data) {
				count = parseInt(data.count)
			})
}

var Hello = {
	view: function () {
		return m("main", [
			m("h1", {
				class: "title"
			}, "My first app"),
			m("button", {
				onclick: increment
			}, count + " clicks"),
		])
	}
}

m.mount(root, Hello)
```


## Welcome to jLoads Project

![jLoads](https://jloads.github.io/logo/jloads_logo_128.png)

+ [demo loader using the jloads library](https://get.jloads.com)
+ [aplication using the jloads library](https://app.jloads.com)
+ [documentation](https://docs.jloads.com)
+ [blog, news](https://blog.jloads.com)
+ [logo](https://logo.jloads.com)


- [What is jloads?](#what-is-jloads)
- [Installation](#installation)
- [Documentation](#documentation)
- [Getting Help](#getting-help)
- [Contributing](#contributing)

## What it's jloads?

media loader for:
+ javscripts
+ media styles css
+ images
+ ...


## Installation

### CDN

```html
<!-- Development: whichever you prefer -->
<script src="https://unpkg.com/jloads/jloads.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jloads/jloads.js"></script>

<!-- Production: whichever you prefer -->
<script src="https://unpkg.com/jloads/jloads.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jloads/jloads.min.js"></script>
```

### npm

```bash
npm install jloads --save
```

The ["Getting started" guide](https://get.jloads.com/#getting-started) is a good place to start learning how to use jloads.

TypeScript type definitions are available from DefinitelyTyped. They can be installed with:

```bash
$ npm install @types/jloads --save-dev
```

## Documentation

Documentation lives on [get.jloads.com](https://get.jloads.com).

You may be interested in the [API Docs](https://get.jloads.com),
a [Simple Application](https://get.jloads.com),
or perhaps some [Examples](https://get.jloads.com).

## Getting Help

jloads has an active & welcoming community on [Gitter](https://gitter.im), or feel free to ask questions on [Stack Overflow](https://stackoverflow.com/questions/tagged/jloads.js) using the `jloads.js` tag.

## Contributing

There's a [Contributing FAQ](https://get.jloads.com) on the jloads site that hopefully helps, but if not definitely hop into the [Gitter Room](https://gitter.im) and ask away!

---

Thanks for reading!

🎁

## How it works?

with jloads it's easy to swith between environments: local/live system

When the domain for environment is not defined, than the main domain is used by function

```javascript
jloads.env("//localhost:8080/", "local", function () {
    return window.location.hostname === 'localhost';
});
```

The callback function is checking if this domain environment is default.

### Example of usage jloads:

```javascript
// Configuration
var success = function (data) {
    console.log('loaded', data);
};
var error = function (data) {
    console.error('!loaded', data);
};

// Declaration
var jloads = new Load(document.body, success, error);

// Environment
jloads.env("//localhost:8080/", "local", function () {
    return window.location.hostname === 'localhost';
});
jloads.env("//get.jloads.com/", "production", function () {
    return window.location.hostname !== 'localhost';
});


// Load NOW
jloads.js([
    "//code.jquery.com/jquery-git.min.js",
    "//stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
]);

// Dynamic loading
document.addEventListener("DOMContentLoaded", function(event) {
    loadDefaultCss();
});

function loadDefaultCss(){
    jloads.cacheOff().css([
        "//code.jquery.com/ui/1.12.1/jquery-ui.min.js",
        "//stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
        "css/default.css",
    ]);
}
function loadPinkCss(){
    jloads.cacheOff().css([
        "css/pink.css",
    ]);
}
function loadBlackCss(){
    jloads.cacheOff().css([
        "css/black.css",
    ]);
}
```

## Example of local implementation codemirror editor's

```javascript
jloadsUrl({
    "head": [
        "jquery-3.2.1.min.js",
        "codemirror/lib/codemirror.js",
        "codemirror/addon/search/searchcursor.js",
        "codemirror/addon/search/search.js",
        "codemirror/addon/dialog/dialog.js",
        "codemirror/addon/edit/matchbrackets.js",
        "codemirror/addon/edit/closebrackets.js",
        "codemirror/addon/comment/comment.js",
        "codemirror/addon/wrap/hardwrap.js",
        "codemirror/addon/fold/foldcode.js",
        "codemirror/addon/fold/brace-fold.js",
        "codemirror/mode/javascript/javascript.js",
        "codemirror/keymap/sublime.js",
        "codemirror/lib/codemirror.css",
        "codemirror/addon/fold/foldgutter.css",
        "codemirror/addon/dialog/dialog.css",
        "codemirror/theme/monokai.css"
    ],
    "#forms": [
        "form/test.html",
        "css/codemirror.css",
        "form/inputs.css?6"
    ]
});
```

Project jLoads is an loader for media implementation

[https://get.jloads.com/](https://get.jloads.com/index.html)

## TODO List
The next Step is to Create the integration between code and OpenApi to generate SDK for another languages
and create any language mirror, to us it in another application, not depends language, version, environment



# HOW TO START?
You can exercise all of the Foundation API methods through the API Console as well as view documentation and descriptions of the inputs and outputs of each API method.

# Solutions
We started in 2018 with few concepts but one idea: fastest development.
Now, in 2020 we are giving solutions:

+ [APIexec - executor library for shell scripts](https://www.apiexec.com)
+ [APIcra - shell scripts libraries](https://www.apicra.com)
+ [APIunit - definition of application, CI, CD](https://www.APIunit.com)
+ [APIbuild - build process definition, focused on quality, versioning](https://www.apibuild.com)
+ [APIsql - data bases, queries, models](https://www.apisql.com)
+ [APIfunc - FaaS solutions](https://www.apifunc.com)


## Our Plans
We are preparing cloud solution, a FaaS implementation of our current environment solutions:

For private, company private API with authorisation we preparing the FaaSapp platform
+ [FaaSapp.com](https://faasapp.com)


---

We covered how to create and update HTML, how to create components, routes for a Single Page Application, and interacted
with a server via XHR.

This should be enough to get you started writing the frontend for a real application. Now that you are comfortable with
the basics of the jloads API, [be sure to check out the simple application tutorial](simple-application.md), which walks
you through building a realistic application.
