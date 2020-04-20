# Bean Counter

![GitHub package.json version](https://img.shields.io/github/package-json/v/genebean/bean-counter)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=genebean/bean-counter)](https://dependabot.com)
![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/genebean/bean-counter)
[![Build Status](https://travis-ci.com/genebean/bean-counter.svg?branch=master)](https://travis-ci.com/genebean/bean-counter)
![GitHub](https://img.shields.io/github/license/genebean/bean-counter)

## Dev

- `npm install`
- `npm run start:dev` (for local dev)
- `npm run start` (for running on server)
- `npm run lint` (to lint all files)
- `npm run test` (to run tests)
- View Swagger UI: http://localhost:3000/api-docs
- View Prometheus metrics: http://localhost:3000/metrics


## Notes

- `npm i -D ${package}` will install the package as a dev dependency
  - these packages will not be built with server, just used for local development
- `npm i -S ${package}` will install the package as a normal dependency
  - these are packages you want to be built and sent along with the server
- husky now runs `npm run lint && npm run test` on every push 
  - this ensures testing is not failing and linting is happening all of the time
- the `.eslintrc` file is where we control linting of the project
  - use the `rules` array to turn rules off when they don't fit the project
- if it's just one instance of a rule being broken you can use the following comment to disable the rule:
  - `/* eslint-disable-next-line ${rule_name} */`