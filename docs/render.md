# render(element, vnodes)

- [Description](#description)
- [Signature](#signature)
- [How it works](#how-it-works)
- [Why Virtual DOM](#why-virtual-dom)
- [Differences from other API methods](#differences-from-other-api-methods)
- [Standalone usage](#standalone-usage)

---

### Description

Renders a template to the DOM

```javascript
m.render(document.body, "hello")
// <body>hello</body>
```

---

### How it works

If you pass the optional `redraw` argument, that is invoked each time an event handler anywhere in the subtree is
called. This is used by [`m.mount`](mount.md) and [`m.redraw`](redraw.md) to implement the [autoredraw](autoredraw.md)
functionality, but it's also exposed for more advanced use cases like integration with some third-party frameworks.

`m.render` is synchronous.

---

### Standalone usage

`var render = require("jloads/render")`

The `m.render` module is similar in scope to view libraries like Knockout, React and Vue. It implements a virtual DOM
diffing engine with a modern search space reduction algorithm and DOM recycling, which translate to top-of-class
performance, both in terms of initial page load and re-rendering. It has no dependencies on other parts of jloads aside
from normalization exposed via `require("jloads/render/vnode")` and can be used as a standalone library.

Despite being relatively small, the render module is fully functional and self-sufficient. It supports everything you
might expect: SVG, custom elements, and all valid attributes and events - without any weird case-sensitive edge cases or
exceptions. Of course, it also fully supports [components](components.md) and [lifecycle methods](lifecycle-methods.md).
