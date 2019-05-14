// Memory efficient
function heavyDuty(index) {
    const bigArray = new Array(7000).fill('smile')
    console.log('created!')
    return bigArray[index]
}

heavyDuty(688)
heavyDuty(688)
heavyDuty(688)
const getHeavyDuty = heavyDuty2();
getHeavyDuty(688)
getHeavyDuty(700)
getHeavyDuty(800)

function heavyDuty2() {
    const bigArray = new Array(7000).fill('smile')
    console.log('created Again!')
    return function(index) {
        return bigArray[index]
    }
}

// Encapsulation