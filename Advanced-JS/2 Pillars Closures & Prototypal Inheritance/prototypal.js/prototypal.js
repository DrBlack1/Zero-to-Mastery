let dragon = {
    name: 'Tanya',
    fire: true,
    fight() {
        return 5
    },
    sing() {
        if (this.fire) {
            return `I am ${this.name}, the breather of fire`
        }
    }
}

let lizard = {
    name: 'kiki',
    fight() {
        return 1
    }
}

lizard.__proto__ = dragon;
dragon.isPrototypeOf(lizard)
// lizard.isPrototypeOf(dragon)
// lizard.sing()
// lizard.dance()
// lizard.fire
// lizard.fight