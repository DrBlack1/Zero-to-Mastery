function sayMyName() {
    var a = 'a';
    return function findName() {
        var b = 'b';
        console.log(c)
        return function printName() {
            var c = 'c';
            return 'Patrick Mack'
        }
    }
}

sayMyName()()()