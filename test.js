//variable hoisting

//example 1 - with var
function examplewithVar(){
    console.log(a); //// undefined
    var a =2;
    console.log(a); //// 2
}

//example 2 - with let
function examplewithLet(){
    console.log(b); //// ReferenceError: Cannot access 'a' before initialization
    let b =2;
    console.log(b); 
}

//example 3 - with const
function examplewithconst(){
    console.log(c); //// ReferenceError: Cannot access 'c' before initialization
    const c =2;
    console.log(c); 
}

// example 4 - function declaration
exampleFunction();
function exampleFunction(){
    console.log('function declaration'); //// function declaration
}

// example 5 - function expression
console.log(funcExpression); //// undefined
var funcExpression = function(){
    console.log('function expression'); //// function expression
}
funcExpression();

// example 6 - arrow function
console.log(arrowfunc); //// ReferenceError: Cannot access 'arrowfunc' before initialization
let arrowfunc = () => {
    console.log('arrow function'); //// arrow function
} 
arrowfunc();