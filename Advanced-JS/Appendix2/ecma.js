// let + const

const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true;
    console.log('inside', wizardLevel);
}

console.log('outside', wizardLevel);


const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
}