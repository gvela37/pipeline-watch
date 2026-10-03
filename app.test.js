const test = require("node:test");
const assert = require("node:assert/strict");
const { createApp } = require("./app");

test("GET /health returns 200 and an ok status", async (t) => {
  const server = createApp();

  t.after(() => {
    return new Promise((resolve, reject) => {
      server.close((error) => {
        if (error) {
          reject(error);
          return;
        }

        resolve();
      });
    });
  });

  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", resolve);
  });

  const port = server.address().port;
  const response = await fetch(`http://127.0.0.1:${port}/health`);

  assert.equal(response.status, 200);
  assert.equal(response.headers.get("content-type"), "application/json");
  assert.deepEqual(await response.json(), { status: "ok" });
});

test("GET /unknown returns 404 and an error message", async (t) => {
  const server = createApp();

  t.after(() => {
    return new Promise((resolve, reject) => {
      server.close((error) => {
        if (error) {
          reject(error);
          return;
        }

        resolve();
      });
    });
  });

  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", resolve);
  });

  const port = server.address().port;
  const response = await fetch(`http://127.0.0.1:${port}/unknown`);
  const body = await response.json();

  assert.equal(response.status, 404);
  assert.equal(response.headers.get("content-type"), "application/json");
  assert.deepEqual(body, { error: "Not found" });
});