import React, {useState} from 'react'
import Input from '../register/input/Input'

export const Registrarion = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className='registration'>
            <div className='registration_header'>Реєстрація</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Введіть email"/>
            <Input value={name} setValue={setName} type="text" placeholder="Придумайте ім'я"/>
            <Input value={password} setValue={setPassword } type="password" placeholder="Придумайте пароль"/>
            <button className="btn btn-outline-info my-2 my-sm-0">Зберегти</button>
        </div>
    )
}
