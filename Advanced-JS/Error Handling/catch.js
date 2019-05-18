function fail() {
    try {
        throw new Error('oopsie!!!')
        console.log('this works')
    } catch (error) {
        console.log(error.message)
    } finally {
        console.log('still good')
        return 'returning fail'
    }
    console.log('!!!!!!!!!!:)')
}

fail()