let events = require("events");

// create an eventEmitter object
let eventEmitter = new events.EventEmitter();

// this is the event listener
// this will turn on the eventEmitter through a call back
eventEmitter.on("connection", () => {
  console.log("Connection successful.");
});

// create an eventEmitter instance
// it emits an event and as mentioned this event type is a connection
eventEmitter.emit("connection");
