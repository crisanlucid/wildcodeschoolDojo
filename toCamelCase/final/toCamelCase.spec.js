var assert = require('assert');
var toCamelCase = require('./toCamelCase.js');


describe('To Camel Case', function(){

    it('Should be loaded', function(){
        assert.equal(true, true);
    })

    it('Should be loaded', function(){
        assert.equal( "camelCase", toCamelCase("camel case") );
    })

    it('Should be loaded', function(){
        assert.equal("camel_Case",toCamelCase("camel-case") );
    })

    it('Should be loaded', function(){
        assert.equal("camelCaseIsCool",toCamelCase("camel case is cool") );
    })

    it('Should be loaded', function(){
        assert.equal("camelCase_Is_Cool",toCamelCase("camel case-is-cool") );
    })

    it('Should be loaded', function () {
        assert.equal("case_Is_CoolCamel", toCamelCase("case-is-cool camel"));
    })
})
