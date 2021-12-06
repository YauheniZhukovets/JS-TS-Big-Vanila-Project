export const usersArray = ['Dimych', 'Natasha', 'Valera', 'Katya']


/*export const usersObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya'
}*/
type userType = {
    id: number
    name: string
}

type usersType = {
    [key: string]: userType
}

export const users: usersType = {
    '101': {id: 101, name: 'Dimych'},
    '2222223': {id: 2222223, name: 'Natasha'},
    '2323': {id: 2323, name: 'Valera'},
    '3': {id: 3, name: 'Katya'}
}
// users[1] //доствание элемента из ассоциативного массива

var user = {id: 1022, name: 'Vasya'}
users[user.id] = user  //добавляем объект

delete users[user.id]  //удаляем объект

users[user.id].name = 'Grisha' // Обновление объекта

export const usersArray = [
    {id: 101, name: 'Dimych'},
    {id: 2222223, name: 'Natasha'},
    {id: 2323, name: 'Valera'},
    {id: 3, name: 'Katya'}
]

// usersArray.find(f=>f.id === 3) доставание элемента и з массива
// var userCopy = [...usersArray.filter(),user]
// var users = usersArray.filter(u=>u.id !== user.id)
