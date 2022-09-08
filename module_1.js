//regular function in js
function test(){
    console.log('test aja nih')
}

//regular function in js with argument
function test2(arg){
    console.log('test2 aja nih => ' + arg)
}

//using arrow function with argument
const test3 = (arg) => {
    return console.log("test3 aja nih => " + arg)
}

module.exports = {
    test: test,
    test2: test2,
    test3: test3
}

// module.exports = {test, test2, test3} 

// exports.test = test
// exports.test2 = test2
// exports.test3 = test3

//or you can export with this style
/*
module.exports = {
    test : function(){
        console.log("test aja nih")
    },
    test2: function(arg) {
        console.log("test aja nih => " + arg)
    }, 
    test3: (arg) => {
        console.log("test aja nih => " + arg)
    }
}
*/

// exports = {test:test, test2:test2, test3:test3}  //unable to call with this way