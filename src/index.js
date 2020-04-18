require('dotenv').config()
const port = process.env.PORT || 3000

const express = require('express')
const { OpenApiValidator } = require("express-openapi-validate")

const promPrefix = 'bean_counter_'
const promBundle = require("express-prom-bundle")
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
const openApiDocument = YAML.load('reference/Bean-Counter.v1.yaml')
const validator = new OpenApiValidator(openApiDocument)

const app = express()
const api = require('./api')

// register Prometheus metrics collection for all routes
// ... except those starting with /api-docs
app.use("/((?!api-docs))*", metricsMiddleware)

// Apply validator to all requests
app.use(validator.match());

// parse requests
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api', api)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocument))

// default route
app.get('/', (req, res) => {
  res.redirect('/api/ping')
});

// listen on port 3000 by default
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
});
