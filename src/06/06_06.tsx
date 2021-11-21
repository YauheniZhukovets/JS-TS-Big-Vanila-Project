import React, {MouseEvent} from 'react';


// const callback = () => {
//     alert("Yo")
// }
// window.setTimeout(callback,1000); // Функцию callback мы не вызываем а передаём


export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name)
        //alert('user should be deleted')
    }

    // const saveUser = () => {
    //     alert('user should be saved')
    // }

    const onNameChanged = () => {
        console.log('name changed')
    }

    const focusLostHandler = () => {
        console.log('focus last')
    }


    return <div><textarea
        onChange={onNameChanged}
        onBlur={focusLostHandler}
    >Dimych</textarea>
        <div><input type="Yo"/></div>
        <button name={'delete'} onClick={deleteUser}>x</button>
        <button name={'save'} onClick={deleteUser}>x</button>
    </div>
}