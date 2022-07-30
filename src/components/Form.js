import React, { useState, useContext } from 'react';
import { AlertContext } from "../context/alert/alertContext";
import {FirebaseContext} from "../context/firebase/firebaseContext";

export const Form = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const firebase = useContext(FirebaseContext)

    const submitHandler = event => {
        event.preventDefault()

        if (value.trim()){
            firebase.addNote(value.trim()).then( () => {
                alert.show("Додано нову нотатку", 'success')
            }).catch( () => {
                alert.show('Щось пішло не так!', 'danger')
            })
            setValue('')
        }else {
            alert.show("Введіть нову нотатку")
        }

    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input type="text"
                    className="form-control"
                    placeholder="Введіть назву нотатки"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </div>
        </form>
    )
}