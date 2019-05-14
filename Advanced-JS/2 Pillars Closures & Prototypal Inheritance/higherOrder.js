function letAdamLogin() {
    let array = [];
    for (let i = 0; i < 100000000; i++) {
        array.push(i)
    }
    return 'Access Granted to Adam'
}

function letEvaLogin() {
    let array = [];
    for (let i = 0; i < 10000000; i++) {
        array.push(i)
    }
    return 'Access Granted to Eva'
}

letAdamLogin()
letEvaLogin()