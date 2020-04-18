# Bean Counter

## Dev

- `npm install`
- `npm run start:dev` (for local dev)
- `npm run start` (for running on server)
- View Swagger UI: http://localhost:3000/api-docs
- View Prometheus metrics: http://localhost:3000/metrics


## Notes

- `npm i -D ${package}` will install the package as a dev dependency
  - these packages will not be built with server, just used for local development
- `npm i -S ${package}` will install the package as a normal dependency
  - these are packages you want to be built and sent along with the server
- husky now runs `npm run lint && npm run test` on every push to ensure testing is not failing and linting is happening