type userType = {
    id: number
    name: string
}

type usersType = {
    [key: string]: userType
}

let users: usersType

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Dimych'},
        '2222223': {id: 2222223, name: 'Natasha'},
        '2323': {id: 2323, name: 'Valera'},
        '3': {id: 3, name: 'Katya'}
    }
})

test('should select corresponding user', () => {
    users['3'].name = 'Ekaterina'
    expect(users['3'].name).toBe('Ekaterina')
})


test('should delete corresponding user', () => {
    delete users['3']
    expect(users['3']).toBeUndefined()

})