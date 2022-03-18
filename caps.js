"use strict";

const eventsEmmitter = require("./lib/events");
require("./apps/driver");
require("./apps/vendor");

eventsEmmitter.on("pickup", () => {});
eventsEmmitter.on("inTransit", () => {});
eventsEmmitter.on("delivered", () => {});
