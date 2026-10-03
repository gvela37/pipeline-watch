const { createApp } = require("./app");
const { parsePort } = require("./config");

let port;

try {
  port = parsePort(process.env.PORT);
} catch (error) {
  console.error(error.message);
  process.exit(1);
}

const server = createApp();

server.listen(port, () => {
  console.log(`Pipeline Watch listening on http://localhost:${port}`);
});