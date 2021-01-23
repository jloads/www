# The auto-redraw system

jloads implements a virtual DOM diffing system for fast rendering, and in addition, it offers various mechanisms to gain
granular control over the rendering of an application.

When used idiomatically, jloads employs an auto-redraw system that synchronizes the DOM whenever changes are made in the
data layer. The auto-redraw system becomes enabled when you call `m.mount` or `m.route` (but it stays disabled if your
app is bootstrapped solely via `m.render` calls).

The auto-redraw system simply consists of triggering a re-render function behind the scenes after certain functions
complete.

### After event handlers

jloads automatically redraws after DOM event handlers that are defined in a jloads view:

jloads may also avoid auto-redrawing if the frequency of requested redraws is higher than one animation frame (typically
around 16ms). This means, for example, that when using fast-firing events like `onresize` or `onscroll`, jloads will
automatically throttle the number of redraws to avoid lag.
