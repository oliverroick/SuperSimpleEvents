describe('Super simple events', function () {
    var eventEmitter;

    var callback1 = function() {};
    var event1 = 'event-1';
    var callback2 = function() {};
    var event2 = 'event-2';

    beforeEach(function() {
        eventEmitter = new EventEmitter();
    });

    it('should register two event listeners', function () {
        eventEmitter.registerListener(event1, callback1);
        eventEmitter.registerListener(event2, callback2);

        expect(eventEmitter.events[event1].length).toBe(1);
        expect(eventEmitter.events[event1][0]).toBe(callback1);
        expect(eventEmitter.events[event2].length).toBe(1);
        expect(eventEmitter.events[event2][0]).toBe(callback2);
    });

    it('should remove one of two listeners', function () {
        eventEmitter.registerListener(event1, callback1);
        eventEmitter.registerListener(event2, callback2);

        eventEmitter.removeListener(event1, callback1);

        expect(eventEmitter.events[event1].length).toBe(0);
        expect(eventEmitter.events[event2].length).toBe(1);
        expect(eventEmitter.events[event2][0]).toBe(callback2);
    });

    it('should call obj.callMe', function () {
        var obj = {
            callMe: function () {}
        }
        eventEmitter.registerListener('event', function () {
            obj.callMe();
        });
        spyOn(obj, 'callMe');
        eventEmitter.emitEvent('event');
        expect(obj.callMe).toHaveBeenCalled();
    });
});