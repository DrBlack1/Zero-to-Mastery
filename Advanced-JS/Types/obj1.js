let a = 5;
let b = a;

b++;

let obj1 = {name: 'Yao', password: '123'};
let obj2 = obj1;

obj2.password = 'easypeasy'

console.log(obj1)
console.log(obj2)


let a = 5;
let b = a;

b++;

let c = [1,2,3,4,5];
let d = [].concat(c);
d.push(187628761)
console.log(c)


let a = 5;
let b = a;

b++;

let obj = {
    a: 'a',
    b: 'b',
    c: {
        deep: 'try and copy me'
    }
};
let clone = Object.assign({}, obj);
let clone2 = {...obj}
let superClone = JSON.parse(JSON.stringify(obj))

obj.c.deep = 'hahaha';
console.log(obj)
console.log(clone)
console.log(clone2)
console.log(superClone)