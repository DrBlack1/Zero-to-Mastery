// HOP
const hof = (fn) => fn(5);
hof(function a(x){ return x})
// Closure
const Closure = function() {
    let count = 0;
    return function getCounter() {
        count++
        return count;
    }
}

const incrementFn = closure();
getCounter()
getCounter()
getCounter()