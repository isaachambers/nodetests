var assert = require('assert');
var authcontroller = require ("../../controllers/auth.controller");

describe('AuthController', ()=>{
  describe('isAuthorized', ()=>{
    it('Should return false if role does not exist in array', ()=>{
      assert.equal(false,authcontroller.isAuthorized(['user'], 'admin'));
    })
    it('Should return true if role exists in array', ()=>{
      assert.equal(true,authcontroller.isAuthorized(['user', 'admin'], 'admin'));
    })
    // Use done for asynchronous methods
    //Short hand methods may not workokay with mocha expecially when testing or accessing mocha properties like timeout
    //eg.   this.timeout(5000)
    it('Should return true if role exists in array using async isAuthorizedAsync',function (done){
      //Change the timeout values for mocha is 2 seconds
      this.timeout(5000)
      authcontroller.isAuthorizedAsync(['user', 'admin'], 'admin', function(res){
        assert.equal(true, res);
        done();
      });
    })
  });
})
