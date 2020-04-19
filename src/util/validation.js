const { OpenApiValidator } = require("express-openapi-validate")
const YAML = require('yamljs')
const openApiDocument = YAML.load('reference/Bean-Counter.v1.yaml')
const validation = new OpenApiValidator(openApiDocument)

module.exports = validation
