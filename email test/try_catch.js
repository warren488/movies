function test(){
        throw "oh shit"
}
test().catch(function(e){
    console.log(e)
})

console.log("this should still run")