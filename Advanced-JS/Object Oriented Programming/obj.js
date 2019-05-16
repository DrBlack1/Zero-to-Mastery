Object.create()
// ES6 Class
class Elf {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon
    }
}

const peter = new Elf('peter', 'stones')
console.log(peter instanceof Elf)
console.log(peter.attack())
const sam = new Elf('sam', 'fire')
console.log(sam.attack())