const giveAccessTo = (name) =>
    'Access Greanted to ' + name

function authenticate(verify) {
    let array = [];
    for (let i = 0; i < verify; i++) {
        array.push(i)
    }
    return giveAccessTo(person.name)
}
function sing(person) {
    return 'la lal la my name is ' + person.name;
}
function letPerson(person, fn) { // ++ tell it what data to user + function.
    if (person.leverl === 'admin') {
        return fn(person)
    } else if (person.level === 'user') {
        return fn(person)
    }
}

letPerson({level: 'user', name: 'Sally', sing})