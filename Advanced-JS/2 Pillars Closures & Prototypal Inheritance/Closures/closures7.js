// Memory efficient
// Encapsulation
const makeNuculearButton = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () => {
        timeWithoutDestruction = -1;
        return 'kaboom';
    }
    setInterval(passTime, 1000)
    return {
        totalPeaceTime: totalPeaceTime
    }
}
const ohno = makeNuculearButton();
ohno.totalPeaceTime()
ohno.launch()