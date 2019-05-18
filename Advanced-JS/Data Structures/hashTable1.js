let user = {
    age: 54,
    name: 'Kylie',
    magic: true,
    scream: function() {
        console.log('ahhhhhh!');
    }
}

user.age // 0(1)
user.spell = 'abra kadabra'; //0(1)
user.scream(); //0(1)

const a = new Map()
const b = new Sets()