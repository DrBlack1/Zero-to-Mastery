// reference type

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };
// object1 === object2 - true, object1.value - 15
// object2.value - 15
// object1 === object3 - false, object1.value - 10
// [] === [] - data structure

// context vs scope
const object4 = {
    a: function() {
        console.log(this)//window
    }//object4.() - undefined
}
// console.log(this === window) - true
// this.alert("hello") - .alert()

// instantiation
class Player {
    constructor(name, type) {
        console.log('player', this);//Wizard {}
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
        console.log('wizard', this);
    }
    play() {
        console.log(`WEEEEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');
// wizard1.introduce();
// wizard1.play();
// wizard2.introduce();
// wizard2.play();


// Cassical Inheritance
var Player = function(name, type) {
    this.name = name;
    this.type = type;
}
        
Player.prototype.introduce = function() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
}

var wizard1 = new Player('Shelly', 'Healer');
var wizard2 = new Player('Shawn', 'Dark Magic');

wizard1.play = function() {
    console.log(`WEEEEEE I'm a ${this.type}`);
}

wizard2.play = function() {
    console.log(`WEEEEEE I'm a ${this.type}`);
}