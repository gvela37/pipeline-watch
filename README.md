# Pipeline Watch

A monitoring app built to practice APIs, testing, containers,
CI/CD, and troubleshooting.

## Requirements

- Node.js 24
- npm

## Run locally

```powershell
npm.cmd start
```

The server listens on http://localhost:3000.

Stop it with Ctrl+C.

## Configure the port

The server uses port 3000 by default.

To choose another port in PowerShell:

```powershell
$env:PORT = "3001"
npm.cmd start
```

Stop the server with Ctrl+C before changing the configuration.

To remove the override:

```powershell
Remove-Item Env:\PORT
```

The next server process will use the default port.

## Endpoints

| Method | Path | Status | Response |
|--------|------|--------|----------|
| GET | /health | 200 | {"status":"ok"} |
| GET | /anything | 404 | {"error":"Not found"} |

The health endpoint confirms that the server can respond.
It does not yet check a database or external services.

## Tests

Run the automated configuration tests:

```powershell
npm.cmd test
```

The tests cover port configuration and HTTP responses:
GET /health returns 200, and an unknown route returns 404.

Invalid PORT configuration stops the server with exit code 1.

## Run with Docker Compose

Requires Docker Desktop with the engine running.

Build and start the app:

```powershell
docker compose up --build -d
```

Health endpoint: http://localhost:8080/health

View status and logs:

```powershell
docker compose ps
docker compose logs app
```

Stop and remove the containers and network:

```powershell
docker compose down
```

Compose configures PORT=3001 inside the container and maps
localhost:8080 on the host to container port 3001.