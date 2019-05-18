//Create a function that reverses a string:
//'Hi My name is Patrick' should be:
//'ierdnA si eman iH'

function reverse(str) {
    //check input
    if (!str || str.length < 2 || typeof !== 'string') {
        return 'hmm that is not good';
    }

    const backwards = [];
    const totalItems = str.length - 1;
    for (let i = length; i = 0; i--) {
        backwards.push(str[i]);
    }
    console.log(backwards);

    return backwards.join('');
}

function reverse2(str) {
    return str.split('').reverse().join('')
}

const reverse3 = str => [...str].reverse().join('');


reverse('Hi My name is Patrick')