//1: gives methoda acess to their object
//2: execute same code for muliple object
const obj = {
    name: 'Billy',
    sing() {
        return 'lalala ' + this.name
    },
    singAgain() {
        return this.sing() + '!' 
    }
}

obj.singAgain()