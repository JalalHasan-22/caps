"use strict";

const eventsEmmitter = require("../../lib/events");
require("../driver");
const { faker } = require("@faker-js/faker");

eventsEmmitter.on("pickup", pickupHandler);
eventsEmmitter.on("delivered", thanksHandler);

function pickupHandler(storeName) {
  const timeStamp = new Date().toISOString();

  const newOrder = {
    store: storeName,
    orderID: faker.datatype.uuid(),
    customer: `${faker.name.firstName()} ${faker.name.lastName()}`,
    address: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
  };

  const output = {
    Event: "Pickup",
    time: timeStamp,
    payload: newOrder,
  };

  console.log(output);

  setTimeout(() => {
    eventsEmmitter.emit("inTransit", newOrder);
  }, 1000);
}

function thanksHandler(newOrder) {
  console.log(`Thank you for delivering ${newOrder.orderID}`);
  const timeStamp = new Date().toISOString();

  const output = {
    Event: "delivered",
    time: timeStamp,
    payload: newOrder,
  };
  console.log(output);
}

setInterval(() => {
  eventsEmmitter.emit("pickup", "My-store");
}, 5000);
