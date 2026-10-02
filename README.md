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

The tests cover the default port, a configured port,
allowed boundaries, and invalid values.

Invalid PORT configuration stops the server with exit code 1.