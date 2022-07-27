import React from 'react'
import Input from '../components/register/input/Input'

export const Login = () => {
    return (
        <div className='login'>
            <div className='registration_header'>Авторизація</div>
            <Input type="text" placeholder="Введіть ім'я або mail"/>
            <Input type="password" placeholder="Введіть пароль"/>
            <button className="btn btn-outline-info my-2 my-sm-0">Увійти</button>
            <button className="btn btn-outline-danger my-2 my-sm-0">Забули ім'я або пароль?</button>
        </div>
    )
}
