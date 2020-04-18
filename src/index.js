/* eslint-disable-next-line import/no-extraneous-dependencies */
require('dotenv').config()

const port = process.env.PORT || 3000

const express = require('express')
const bodyParser = require('body-parser')

const promPrefix = 'bean_counter_'
const promBundle = require('express-prom-bundle')

const metricsMiddleware = promBundle({
  includeMethod: true,
  includePath: true,
  promClient: {
    collectDefaultMetrics: {
      promPrefix
    }
  }
});

const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
// we need to run this from the point of view of where npm is running
const swaggerDocument = YAML.load('reference/Bean-Counter.v1.yaml')

const app = express()
const api = require('./api')

// register Prometheus metrics collection for all routes
// ... except those starting with /api-docs
app.use('/((?!api-docs))*', metricsMiddleware)

// parse requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', api)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// default route
app.get('/', (req, res) => {
  res.redirect('/api/ping')
});

// listen on port 3000 by default
app.listen(port, () => {
  /* eslint-disable-next-line no-console */
  console.log(`Server is listening on port ${port}`)
});
