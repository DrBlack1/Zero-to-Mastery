try {
    setTimeout(function() {
        fakevariable;
    }, 1000)
} catch (e) {
    console.log('got it', e)
}

try {
    try {
        something();
    } catch(e) {
        throw new Error(e)
    }
} catch (e) {
    console.log('got it', err)
}