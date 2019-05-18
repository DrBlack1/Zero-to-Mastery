const strings = 



['a', 'b', 'c', 'd', 'e'];
//4*4 = 16 bytes of storage


strings[2] // 0(1)

//push
strings.push('e'); //0(n)

//pop
strings.pop();
strings.pop(); // 0(1)

//unshift
strings.unshift('x'); // 0(n)

//splice
strings.splice(2, 0, 'alien') // 0(n)

console.log(strings)