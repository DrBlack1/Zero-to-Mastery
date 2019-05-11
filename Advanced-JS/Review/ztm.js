setTimeout(() => {console.log('1', 'is the loneliest number')}, 0)
Promise.resolve('h1').then(() => console.log('2'));
console.log('3', 'is a crowd')

// 3 is a crowd
// 2
// 1 is the loneliest number