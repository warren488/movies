var rewire = require("rewire");
var expect = require("chai").expect;
var tools = rewire("../tools");
var nock = require("nock");
var sinon = require("sinon");


describe("tools", function(){

describe("test func", function(){
    it("should return a simple string", function(done){
        var results = tools.testFunc();
        expect(results).to.equal("string");
        done();
    })
})


// 
    describe("http test", function(){
        before(function(){
            nock("https://www.google.com")
                .get("/")
                .reply(200, "GOOGLE!!");

        });
        it("loads google dot com", function(done){
            tools.httpTest({first: "warren"}, function(html){
                expect(html).to.equal("GOOGLE!!");
                done();
            })
        })
    })


//testing rewire and sinon

    describe("rewireTest", function(){

        beforeEach(function(){
            this.testPeople = [
                {first:"test",last:"test"},
                {first:"for",last:"for"},
                {first:"rewire",last:"rewired"}
            ];

            this.console = {
                log: sinon.spy()
            };

            

            tools.__set__("people", this.testPeople);
            tools.__set__("console", this.console)
        });

        it("should return the names of people", function(){

            var _this = this;
            //if there were a callback function for getPeople then the 
            // _this variable would have to be checked since this would be out of 
            //scope
            tools.getPeople();
            expect(this.console.log.callCount).to.equal(3)
        })
    })

})
