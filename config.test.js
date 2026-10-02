const test = require("node:test");
const assert = require("node:assert/strict");
const { parsePort } = require("./config");

test("uses port 3000 when PORT is missing", () => {
  assert.equal(parsePort(undefined), 3000);
});

test("accepts a configured port", () => {
  assert.equal(parsePort("3001"), 3001);
});

test("accepts the lowest and highest allowed ports", () => {
  assert.equal(parsePort("1"), 1);
  assert.equal(parsePort("65535"), 65535);
});

test("rejects invalid ports", () => {
  const invalidValues = ["banana", "3000.5", "0", "-1", "65536"];

  for (const value of invalidValues) {
    assert.throws(
      () => parsePort(value),
      /PORT must be a whole number between 1 and 65535/
    );
  }
});