//Execution Content

function printName() {
    return 'Patrick Mack'
}

function findName() {
    return printName()
}

function sayMyName() {
    return findName()
}

sayMyName()


//Lexical Environment

function printName() {
    return 'Patrick Mack'
}

function findName() {
    function a() {

    }
    return printName()
}

function sayMyName() {
    return findName()
}

sayMyName()