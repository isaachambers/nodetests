var assert = require('assert');
var authcontroller = require ("../../controllers/auth.controller");

describe('AuthController', ()=>{
  describe('isAuthorized', ()=>{
    it('Should return false if role does not exist in array', ()=>{
      assert.equal(false,authcontroller.isAuthorized(['user'], 'admin'));
    })
  });
})
