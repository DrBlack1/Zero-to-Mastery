//Call Stack + Memory Heap
const number = 610; //allocate memory for number
const string = 'some text' // allocate memory for a string





function subtractTwo(num) {
    var human = { // allocate memoty for an object.... and it's values.
        first: 'Patrick',
        last: 'Mack'
    }
    return num - 2;
}

function calculate() {
    const sumTotal = 4 + 5;
    return subtractTwo(sumTotal);
}

calculate()


//callstack