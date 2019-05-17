//no side effects
//input --> output

function a(num1, num2) {
    return num1 + num2
}

function b(num) {
    return num*2
}

b(a(3,4))



const array = [1,2,3]
function mutateArray(arr) {
    const newArray = [].concat(arr);
    newArray.pop()
    return newArray
}
function mutateArray2(arr) {
    return arr.map(item => item*2)
}
const array2 = removeLastItem(array);
const array3 = mutateBy2(array);
console.log(array, array2, array3)