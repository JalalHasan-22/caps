"use strict";

const eventsEmmitter = require("../lib/events");

describe("testing the three events", () => {
  const value = "testing";
  let consoleSpy;

  beforeAll(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
  });
  afterAll(() => {
    consoleSpy.mockRestore();
  });

  it("testing the pick up event", async () => {
    // jest.runAllTimers();

    // jest.useFakeTimers();
    eventsEmmitter.emit("pickup", value);
    await consoleSpy();
    // jest.advanceTimersByTime(6000);
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
