class Character {
    #age = 54
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.#age;
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

const dolby = new Elf('Dolby', 'cloth', 'house');

const sherk = new Ogre('sherk', 'club', 'green')
sherk._attack = false
sherk._attack