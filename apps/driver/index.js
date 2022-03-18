"use strict";

const eventsEmmitter = require("../../lib/events");

eventsEmmitter.on("inTransit", inTransitHandler);
eventsEmmitter.on("delivered", deliveredHandler);

function inTransitHandler(newOrder) {
  const timeStamp = new Date().toISOString();

  const output = {
    Event: "In Tranist",
    time: timeStamp,
    payload: newOrder,
  };
  console.log(`DRIVER: picked up ${newOrder.orderID}`);
  console.log(output);

  setTimeout(() => {
    eventsEmmitter.emit("delivered", newOrder);
  }, 3000);
}

function deliveredHandler(newOrder) {
  console.log(`DRIVER: delivered up ${newOrder.orderID}`);
}
