type UserType = {
    name: string
    age: number
    address:{title:string}
}
function IncreaseAge(u: UserType) {
    u.age++;
}

test('big reference type test', () => {
    var user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }

    IncreaseAge(user)
    expect(user.age).toEqual(33)

    const superUser = user
    superUser.age = 1000

    expect(user.age).toBe(1000)
    expect(user.age).toEqual(1000)
})
test('array reference test', () => {
    var users = [
        {
            name: 'Dimych',
            age: 32
        },
        {
            name: 'Dimych',
            age: 32
        }
    ]

    let admins = users
    admins.push({name:'Bandugan', age: 10})

    expect(users[2]).toEqual({name:'Bandugan', age: 10})
})
test('reference type test', () => {
    var user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }
    var user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: user.address
    }

    user2.address.title = 'Kanary'

    expect(user.address.title).toBe(user2.address.title)
    expect(user.address.title).toBe('Kanary')
})
test('value type test', () => {
    let usersCount = 100;
    let adminCount = usersCount


    expect(adminCount).toBe(100)
})
test('reference type array test', () => {
    const address = {
        title: "Minsk"
    }

    var user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }
    var user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: user.address
    }

    const users = [user, user2, {name:'Misha', age:4 , address: address.title}]

    const admins = [user, user2]
    admins[0].name = 'Dmitry'

    expect(users[0].name).toBe("Dmitry")
    expect(user.name).toBe('Dmitry')
})

test('sort array test', () => {
   const letters = ['c','d','a','z','e',]
    letters.sort();

   expect(letters).toEqual(['a','c','d','e','z',])

})