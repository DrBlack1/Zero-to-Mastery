function two() {
    var isValid; //undefined
}

function one() {
    var isValid = true; //local environment
    two(); // new EC
}

var isValid = false;
one();

//two() -- undefined
//one() -- true
//global() -- false