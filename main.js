//function statement AKA function declaration
function a(){
    console.log('A was called');
}

//function expression 
const b = function(){
    console.log('B was called');
} 

//anonymous function 
// function(){ //throws error

// }

//named function expression 
const c = function xyz(){
    console.log(`XYZ was called using named function expression`);
}

const d = function(mynewfunc){
    console.log(`inside ddddddddddddddddddddddd`);
    mynewfunc();
}

d(function(){
    console.log(`this will be called inside another function`);
});