const basket = ['apple', 'oranges', 'grapes'];
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}

//1
for (let i =0; i < basket.length; i++) {
    console.log(basket[i]);
}

//2
basket.forEach(item => {
    console.log(item);
})

basket = {
    0: 'apples',
    1: 'oranges',
    2: 'grapes'
}

// for of
// Iterating - arrays, strings
for (item of detailedbasket) {
    console.log(item);
}

// for in - properties
// enumerating - objects
for (item in basket) {
    console.log(item);
}

