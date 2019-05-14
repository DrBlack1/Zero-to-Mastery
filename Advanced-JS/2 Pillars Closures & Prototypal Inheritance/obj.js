//Object method 1
function one() {
    return 1
}

one()


//Object method 2
const obj = {
    two() {
        return 2;
    }
}

obj.two()


//Object method 3
function three() {
    return 3;
}

three.call()


//Object method 4
const four = new Function('return 4')

four()


//Object method 5
function woohoo() {
    console.log.log('woohoo')
}

woohooo.yell = 'ahhhhhhh'
woohooo.name

//Object method 6
const obj = {
    
}

obj.argument