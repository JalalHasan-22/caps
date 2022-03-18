"use strict";

const eventsEmmitter = require("../lib/events");
const caps = require("../caps");

describe("testing the three events", () => {
  const value = "testing";
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log");
  });
  afterAll(() => {
    consoleSpy.mockRestore();
  });

  it("testing the pick up event", async () => {
    eventsEmmitter.emit("pickup", value);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });

  it("testing the inTransit event", async () => {
    eventsEmmitter.emit("inTransit", value);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });

  it("testing the delivered event", async () => {
    eventsEmmitter.emit("delivered", value);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
