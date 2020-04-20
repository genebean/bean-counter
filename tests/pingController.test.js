const chai = require('chai')
const ping = require('../src/api/controllers/pingController.js')

describe('pingController unit test', () => {
    let returnData = {}
    beforeEach('', () => {
        // do stuff before each test
        const req = {}
        const res = {
            data: {},
            json: (data) => {
                returnData = data
            }
        }
        ping.pingGet(req, res)
    })

    describe('pingGet function', () => {

        it('returns a valid name', () => {
            chai.expect(returnData).to.have.property('name')
            chai.expect(returnData.name).to.be.a('string')
            chai.expect(returnData.name).to.not.equal('')
        })

        it('returns a valid description', () => {
            chai.expect(returnData).to.have.property('description')
            chai.expect(returnData.description).to.be.a('string')
            chai.expect(returnData.description).to.not.equal('')
        })

        it('returns a valid version', () => {
            chai.expect(returnData).to.have.property('version')
            chai.expect(returnData.version).to.be.a('string')
            chai.expect(returnData.version).to.not.equal('')
            chai.expect(returnData.version).to.match(/^\d+\.\d+\.\d+$/)
        })

        it('returns a valid uptime', () => {
            chai.expect(returnData).to.have.property('uptime')
            chai.expect(returnData.uptime).to.be.a('number')
            chai.expect(returnData.uptime).to.be.above(0)
        })

    })

})
