const first = () => {
    const greet = 'Hi';
    const second = () => {
        const name = 'bobby';
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

//Closures - a function ran. the function executed. It's never going to execute again.
// But it's going to remember that there are references to those variables.
// so the child scope always has access to the parent scope.

//Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a *b;// curriedMultiply(3)(4) returns 12
const multiplyBy5 = curriedMultiply(5);// multiplyBy5(5) returns 25

//Compose
const compose = (f, g) => (a) => f(7);

const sum = (num) => num + 1;

compose(sum, sum)(5); //returns 7

// Avoiding side Effects, functional purity.

var a = 1;
function b() {
    a= 2;
}