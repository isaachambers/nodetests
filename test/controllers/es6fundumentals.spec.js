var assert = require('assert')
var es6controller = require('../../controllers/es6fundumentals');

describe('ES6 Fundumentals',function (){
  describe('otherUtils', function(){
    it('checks to see if the default value of defaultParams is Betty', function(){
      assert.equal('Betty',es6controller.defaultParams());
    })
    it('checks to see if null assigned value stays null', function(){
      assert.equal(null,es6controller.defaultParams(null));
    })
    it('checks to see if the default value is assigned', function(){
      assert.equal('Jombwe',es6controller.defaultParams('Jombwe'));
    })
    it('check is masiga is now covered', ()=>{
      assert.equal('',es6controller.isMasiga())
    })
    it('should take undefined in parameter and return defined value', function(){
      let [a,b,c] = es6controller.undefinedValues(1,undefined);
      assert.equal(b,2);
    })

    it('should return a sum of all the parameters',function(){
      assert.equal(es6controller.sumMultiple("Scotty"),0);
    })

    it('should spread the array and return the total of elements',function (){
      assert.equal(es6controller.spreadOperators(...[1,2,3]),6)
    })

    it('should create/build an array from another array', function(){
      let a = [1,2,3]
      let b = [...a, 4,5,6,7]
      assert.deepEqual(b, [1,2,3,4,5,6,7])
    })

    it ('should combine literals using templating', function (){
      var object = new Object();
      object.name = 'Mark';
      object.age = 24;
      assert.equal(es6controller.templating(object), 'Mark is 24 years old from templating')
    })

  })
})
