# API

### Cheatsheet

Here are examples for the most commonly used methods. If a method is not listed below, it's meant for advanced usage.


---

#### m.route(root, defaultRoute, routes) - [docs](route.md)

```javascript
var Home = {
	view: function() {
		return "Welcome"
	}
}

m.route(document.body, "/home", {
	"/home": Home, // defines `https://example.com/#!/home`
})
```

#### m.route.set(path) - [docs](route.md#mrouteset)

```javascript
m.route.set("/home")
```

#### m.route.get() - [docs](route.md#mrouteget)

```javascript
var currentRoute = m.route.get()
```
