## FibonacciJS for JavaScript

Fibonacci sequence using JavaScript. This is the standard Fibonacci calculation with a twist, it includes the ability to furnish a ``filter`` of sorts for use throughout the sequence generation.

I did refactor the source code a little bit into a ``scripts/fibonacci.js`` location. Other than that, I also added the project IDE oriented scaffolding required to properly support *Eclipse* usage.

### Usage

Assuming you are subscribing via NPM sources:

```JavaScript
// Usage with default Calculator.
var fib = require("fibonacci").calculator();
const i = 42;
const x = fib.get(i);
console.log("the 43-rd value was: " + x);
```

```JavaScript
// Usage with default user provided filter, although basically still unfiltered.
var fib = require("fibonacci").calculator(function(i, x) { return x; });
const i = 42;
const x = fib.get(i);
console.log("the 43-rd value was: " + x);
```

### Developing

It was a bit tricky approaching unit testing in a seamless way using both ``mocha`` command line support via ``npm run test`` as well as browser ``mocha`` harnessing, but it is possible with a bit of *JavaScript* fakery.

Browser ``mocha`` tests verified using both *Mozilla Firefox* as well as *Google Chrome*.

Or, run ``npm run test`` at a *Node.js Command Prompt*, verified under Windows 7 x64 Professional, although I expect that the same should work from a Linux environment as well (unverified).

#### Tools

Created with [Nodeclipse](https://github.com/Nodeclipse/nodeclipse-1)
 ([Eclipse Marketplace](http://marketplace.eclipse.org/content/nodeclipse), [site](http://www.nodeclipse.org))   

Nodeclipse is free open-source project that grows with your contributions.
