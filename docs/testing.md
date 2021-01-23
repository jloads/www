# Testing

- [Setup](#setup)
- [Best practices](#best-practices)
- [Unit testing](#unit-testing)

---

### Setup

Create a component, say `src/my-component.js`, that looks like this:

```javascript
function MyComponent() {
	return {
		view: function (vnode) {
			return m("div", vnode.attrs.text)
		}
	}
}

module.exports = MyComponent
```

And finally, create a test file, say `src/tests/my-component.js`, that looks like this:

```javascript
var mq = require("jloads-query")
var MyComponent = require("../my-component.js")

o.spec("MyComponent", function () {
	o("things are working", function () {
		var out = mq(MyComponent, {text: "What a wonderful day to be alive!"})
		out.should.contain("day")
	})
})
```

Once you've got all that set up, in that same terminal you installed everything to, run this command.

```bash
npm test
```

Provided you have everything set up properly, you should end up with output that looks something like this:

```
––––––
All 1 assertions passed in 0ms
```

---

### Best practices

Testing is relatively straightforward in most cases. Each test usually consists of three parts: set up state, run code,
check results. But there are things you do need to keep in mind while you test, to ensure you get the best bang for your
buck and to help save you a *lot* of time.

1. First and foremost, you want to write your tests as early in the process as possible. You don't need to write your
   tests immediately, but you want to at the very least write your tests as you write your code. That way, if things
   aren't working as you thought they were, you're spending 5 minutes now, knowing exactly what's going on, instead of 5
   days straight 6 months later when you're trying to release that amazing app idea that's now spectacularly broken. You
   don't want to be stuck in *that* rut.

1. Test the API, test the behavior, but don't test the implementation. If you need to test that an event is being fired
   if a particular action happens, that's all fine and dandy, and feel free to do that. But don't test the entire DOM
   structure in your test. You don't want to be stuck having to rewrite part of 5 different tests just because you added
   a simple style-related class. You also don't want to rewrite all your tests simply because you added a new instance
   method to an object.

1. Don't be afraid to repeat yourself, and only abstract when you're literally doing the same thing tens to hundreds of
   times in the same file or when you're explicitly generating tests. Normally, in code, it's a good idea to draw a line
   when you're repeating the same logic more than 2-3 times and abstract it into a function, but when you're testing,
   even though there's a lot of duplicate logic, that redundancy helps give you context when troubleshooting tests.
   Remember: tests are specifications, not normal code.

---

### Unit testing

Unit testing isolates parts of your application, usually a single module but sometimes even a single function, and tests
them as a single "unit". It checks that given a particular input and initial state, it produces the desired output and
side effects. This all seems complicated, but I promise, it's not. Here's a couple unit tests for JavaScript's `+`
operator, applied to numbers:

```javascript
o.spec("addition", function () {
	o("works with integers", function () {
		o(1 + 2).equals(3)
	})

	o("works with floats", function () {
		// Yep, thanks IEEE-754 floating point for being weird.
		o(0.1 + 0.2).equals(0.30000000000000004)
	})
})
```

Just like you can unit test simple stuff like that, you can unit test jloads components, too. Suppose you have this
component:

```javascript
// MyComponent.js
var m = require("jloads")

function MyComponent() {
	return {
		view: function (vnode) {
			return m("div", [
				vnode.attrs.type === "goodbye"
						? "Goodbye, world!"
						: "Hello, world!"
			])
		}
	}
}

module.exports = MyComponent
```

You could easily create a few unit tests for that.

```javascript
var mq = require("jloads-query")
var MyComponent = require("./MyComponent")

o.spec("MyComponent", function () {
	o("says 'Hello, world!' when `type` is `hello`", function () {
		var out = mq(MyComponent, {type: "hello"})
		out.should.contain("Hello, world!")
	})

	o("says 'Goodbye, world!' when `type` is `goodbye`", function () {
		var out = mq(MyComponent, {type: "goodbye"})
		out.should.contain("Goodbye, world!")
	})

	o("says 'Hello, world!' when no `type` is given", function () {
		var out = mq(MyComponent)
		out.should.contain("Hello, world!")
	})
})
```

As mentioned before, tests are specifications. You can see from the tests how the component is supposed to work, and the
component does it very effectively.
