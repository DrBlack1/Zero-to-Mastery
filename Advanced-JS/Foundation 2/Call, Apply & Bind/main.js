// function a() {
//     console.log('hi')
// }

// a.call()
// a.apply()
// a.bind()

const wizard = {
    name: 'Merlin',
    health: 100,
    heal(num1, num2) {
        return this.health += num1 + num2;
    }
}

const archer = {
    name: 'Robin Hood',
    health: 30
}
console.log('1', archer)
const healArcher = wizard.heal.bind(archer, 100, 30)
wizard.heal.call(archer, 50, 30)
wizard.heal.apply(archer, [100, 30])
console.log('2', archer)