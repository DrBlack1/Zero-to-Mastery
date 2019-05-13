//1: gives methoda acess to their object
//2: execute same code for muliple object
function importantPerson() {
    console.log(this.name)
}

const name = 'Sunny';
const obj1 = {
    name: 'Cassy',
    importantPerson: importantPerson
}
const obj2 = {
    name: 'Jacob',
    importantPerson: importantPerson
}
obj2.importantPerson()