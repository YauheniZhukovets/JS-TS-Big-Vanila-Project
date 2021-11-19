import React from 'react';


// const callback = () => {
//     alert("Yo")
// }
// window.setTimeout(callback,1000); // Функцию callback мы не вызываем а передаём


export const User = () => {

    const deleteUser = () => {
        alert('user should be deleted')
    }

    const saveUser = () => {
        alert('user should be saved')
    }



    return <div>Dimych
        <button onClick={deleteUser}>delete</button>
        <button onClick={saveUser}>save</button>
    </div>
}