//Создание объекта через функцию-конструктор и наследование через prototype
/*function User(name, site, dob) {
    //this = {}
    this.name = name
    this.site = site
    this.dateOfBirth = dob
    //return this
}

User.prototype.hello = function () {
    console.log(`I am ${this.name} from ${this.site}`)
}
const user1 = new User('Evgen','it-kamasutra.com',new Date(1992, 9, 3))
const user2 = new User('Veronika','incubator.com',new Date(1993, 10, 6))

user1.hello()
user2.hello()*/


//Создание объекта через class
class User {
    // #name = ''; // инкопсуляция
    constructor(name, site, dob) {
        this.name = name
        this.site = site
        this.dateOfBirth = dob
        this.counter = 0
    }

    hello() {
        ++this.counter
        console.log(`I am ${this.name} from ${this.site}`)
    }

}

const user1 = new User('Evgen','it-kamasutra.com',new Date(1992, 9, 3))
const user2 = new User('Veronika','incubator.com',new Date(1993, 10, 6))

user1.hello()

user2.hello()
user2.hello()

console.log(user1)
console.log(user2)

// НАСЛЕДОВАНИЕ
class Coder extends User {
    constructor(name, site, dob, tech) {
        super(name, site, dob)
        this.tech = tech
    }
    code() {
        console.log(`I am ${this.name}, here is my ${this.tech} code: const sum = (a,b) => a+b`)
    }

    hello() {
        super.hello();
        console.log('Go way')
    }
}
const coder1 = new Coder('Evgen coder','it-kamasutra.com',new Date(1992, 9, 3), 'JS')
coder1.code()
coder1.hello()