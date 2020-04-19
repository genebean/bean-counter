const chai = require('chai')
const validation = require('../src/util/validation.js')

describe('Validation unit test', () => {
    let validationData = {}
    beforeEach('', () => {
        // do stuff before each test
        validationData = validation
    })

    describe('validation function', () => {

        it('returns a valid OpenApiValidator', () => {
            chai.expect(validationData).to.be.an('object')
            chai.expect(validationData).to.have.property('_document')
        })

    })

})
