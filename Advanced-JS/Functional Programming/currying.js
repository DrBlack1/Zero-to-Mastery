//Currying
const multiply = (a, b) => a*b;
const curriedMultiply = (a) => (b) => a*b;
const multiplyBy5 = curriedMultiply(5);

//10 years
curriedMultiplyBy5(4)
curriedMultiplyBy5(4)
curriedMultiplyBy5(4)