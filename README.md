# SuperSimpleEvents

[![Build Status](https://travis-ci.org/oliverroick/SuperSimpleEvents.svg?branch=master)](https://travis-ci.org/oliverroick/SuperSimpleEvents) [![Coverage Status](https://coveralls.io/repos/oliverroick/SuperSimpleEvents/badge.png?branch=master)](https://coveralls.io/r/oliverroick/SuperSimpleEvents?branch=master)

SuperSimpleEvents is a super simple event emitter for JavaScript. 

## How to use

### Extend your prototype with EventEmitter:

```
// Create the Prototype to be extended
function YourPrototype() {
    ...
}

// Extend the prototype
YourPrototype.prototype = new EventEmitter();

// Reset the constructor to YourPrototype
YourPrototype.constructor = YourPrototype;
```

### Register an event listener

```
function callback(params) {
    // do something with the params returned by the event emitter
    console.log(params.something); // new-value
}

var emitter = YourPrototype();
emitter.registerListener('something:changed', callback);
```

### Remove an event listener

```
emitter.removeListener('event-name', callback);
```

### Emit an event

```
YourPrototype.prototype.changeSomething() = function () {
    // Change something

    this.emitEvent('something:changed', {something: 'new-value'})
}
```