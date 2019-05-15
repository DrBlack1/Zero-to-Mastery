const elf = {
    name: 'Orwell',
    weapon: 'bow',
    attack() {
        return 'attack with ' + elf.weapon
    }
}

const elf2 = {
    name: 'Sally',
    weapon: 'bow',
    attack() {
        return 'attack with ' + elf.weapon
    }
}

elf.attack()
elf2.attack()

//factory functions
function createElf(name, weapon) {
    return {
        name,
        weapon,
        attack() {
            return 'attack with ' + weapon
        }
    }
}

const peter = createElf('peter', 'stones')
peter.attack()
const sam = createElf('sam', 'fire')
sam.attack()