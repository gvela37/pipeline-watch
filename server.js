const http = require("node:http");

const port = 3000;

const server = http.createServer((request, response) => {
  console.log(`${request.method} ${request.url}`);

  response.setHeader("Content-Type", "application/json");

  if (request.method === "GET" && request.url === "/health") {
    response.writeHead(200);
    response.end(JSON.stringify({ status: "ok" }));
    return;
  }

  response.writeHead(404);
  response.end(JSON.stringify({ error: "Not found" }));
});

server.listen(port, () => {
  console.log(`Pipeline Watch listening on http://localhost:${port}`);
});