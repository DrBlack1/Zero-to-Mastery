class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon;
    }
}

class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        console.log(this)
        this.type = type
    }
}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }
    makeFort() {
        return 'strongerst fort in the world made';
    }
}

const fiona = new Elf('Dolby', 'cloth', 'house');
dolby.attck()
const sherk = new Ogre('sherk', 'club', 'green')
sherk.makeFort()

console.log(dolby instanceof Character)