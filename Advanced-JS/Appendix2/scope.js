// Scope

var b = "Can I access this?";

function bb() { // scope within the function
    var a = "hello";
    console.log(a);
}

// Root Scope (window)
var fun = 5;

function funFunction() {
    // child scope
    console.log(fun);
}

function funFunction() {
    // child scope
    var fun = "hellooo";
    console.log(1, fun);
}

function funFunction() {
    // child scope
    var fun = "Byee";
    console.log(2, fun);
}

function funFunction() {
    // child scope
    var fun = "AHHHHHH";
    console.log(3, fun);
}

console.log("window", fun);
funFunction();
funnerFunction();
funestFunction();