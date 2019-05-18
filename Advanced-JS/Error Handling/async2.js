(async function() {
    await Promise.resolve('oopsie #1')
    await Promise.reject('oopsie #2')
    console.log('is this still good?')
})();