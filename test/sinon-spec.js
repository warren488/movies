var sinon = require("sinon") ;
var rewire = require("rewire") ;
var nock = require("nock") ;

var sfuncs = rewire("../sinonfunctions");
var expect = require("chai").expect;

var pers = {
    first:"warren",
    last:"scantlebury"
}

// describe("sinon", function(){

//     this.fwcb = sinon.stub().yields(pers, "TESTING!!");
//     sfuncs.__set__("fwcb", this.fwcb);

//     describe("httpTest", function(done){

//         beforeEach(function(){
//             this.callback = sinon.spy();
//             sfuncs.httpTest("pers", this.callback)
//         })

//         it("receives a valid person", function(){
//             expect(this.callback.calledWith("pers"))
//             .to.equal(true)
//         });

//         it("calls fwcb with my name", function(){
//             expect(this.fwcb.calledWith(pers, "TESTING!!"))
//             .to.equal(true);
//         });
//     })

// })

    describe("http test", function(){


        beforeEach(function(){

        this.fwcb = sinon.stub().yields("pers", "TESTING!!");
        sfuncs.__set__("fwcb", this.fwcb);

            nock("https://www.google.com")
                .get("/")
                .reply(200, "GOOGLE!!");

        });
        it("loads google dot com", function(done){
            sfuncs.httpTest({first: "warren"}, function(html){
                expect(html).to.equal("GOOGLE!!");
                done();
            })
        });
        it("calls fwcb with my name", function(){
            expect(this.fwcb.calledWith("pers", "TESTING!!"))
            .to.equal(true);
        });
    })