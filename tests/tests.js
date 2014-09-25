var test = require('tape');
var EventEmitter = require('../src/super-simple-events.js');

var callback1 = function() {};
var event1 = 'event-1';
var callback2 = function() {};
var event2 = 'event-2';

test('register event listeners', function (t) {
    var eventEmitter = new EventEmitter();
    t.plan(4);

    eventEmitter.registerListener(event1, callback1);
    eventEmitter.registerListener(event2, callback2);

    t.equal(eventEmitter.events[event1].length, 1);
    t.equal(eventEmitter.events[event1][0], callback1);
    t.equal(eventEmitter.events[event2].length, 1);
    t.equal(eventEmitter.events[event2][0], callback2);
});

test('remove event listener', function (t) {
    var eventEmitter = new EventEmitter();
    t.plan(3);

    eventEmitter.registerListener(event1, callback1);
    eventEmitter.registerListener(event2, callback2);
    eventEmitter.removeListener(event1, callback1);

    t.equal(eventEmitter.events[event1].length, 0);
    t.equal(eventEmitter.events[event2].length, 1);
    t.equal(eventEmitter.events[event2][0], callback2);
});

test('call callback', function (t) {
    var eventEmitter = new EventEmitter();
    t.plan(1);

    eventEmitter.registerListener('event', function () {
        t.ok(true);
    });
    eventEmitter.emitEvent('event');
});