class AuthenticationError extend Error {
    constructor(message) {
        super(message)
        this.name = 'AuthenticationError'
        this.favouriteSnack = 'grapes'
    }
}
class DatabaseError extend Error {
    constructor(message) {
        super(message)
        this.name = 'DatabaseError'
        this.message = 'grapes'
    }
}
class PermissionError extend Error {
    constructor(message) {
        super(message)
        this.name = 'PermissionError'
        this.favouriteSnack = 'grapes'
    }
}

const a = new DatabaseError('oopsie')
a instanceof DatabaseError