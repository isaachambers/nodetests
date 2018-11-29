var assert = require('assert')

describe('Basic Mocha Test', ()=>{
  it('should throw errors', ()=>{
    try {
      assert.equal(3,(()=> {return 3})())
    } catch (e) {
        console.error(e);
    } finally {

    }
  })
})


// You can add flags to mocha command to run all tests under the tests directory.
