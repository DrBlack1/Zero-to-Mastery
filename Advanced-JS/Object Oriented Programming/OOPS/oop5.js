//factory functions
// Constructor Functions
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}

Elf.prototype.attack = function() {
    return 'attack with ' + this.weapon
}

const peter = new Elf('peter', 'stones')
console.log(peter.attack())
const sam = new Elf('sam', 'fire')
console.log(sam.attack())