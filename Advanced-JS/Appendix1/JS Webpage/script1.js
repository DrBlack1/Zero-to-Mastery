// Functions
function sayHello() {
    console.log("Hello");
}

sayHello();

var sayBye = function() {
    console.log("Bye");
}

sayBye();


function sing(song) {
    console.log(song);
}

sing("Laaa deee daaa");
sing("helllloooooo");
sing("backstreets back alright");


function multiply(a, b) {
    if (a > 10 || b > 10) {
        return "that's too hard";
    } else {
        return a*b
    }
    return a*b;
}

multiply(5, 10);

function multiply(a, b) {
    return a*b;
}

var total = multiply(4,5);
alert(total);


parameters
arguments