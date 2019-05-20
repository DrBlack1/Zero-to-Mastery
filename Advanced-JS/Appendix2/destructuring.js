// Destructuring

const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
}

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

const { player, experience } = obj;
let { wizardLevel } = obj;

//Object properties
const name = 'john snow';

const obj = {
    [name]: 'hello',
    ['ray' + 'smith']: 'hihi'
}

const a = 'Simon';
const b = true;
const c = {};

const obj = {
    a,
    b,
    c
}


//Template strings

const name = "Sally";
const age = 34;
const pet = "horse";

const greeting = "Hello " + name + " yu seem to be doing " + greeting + "!";

const grretingBest = `Hello ${name} you seem to be ${age-10}. What a loverly ${pet} you have`;

//default arguments
function greet(name='', age=30, pet='cat'){
    return `Hello ${name} you seem to be ${age-10}. What a loverly ${pet} you have`;
}