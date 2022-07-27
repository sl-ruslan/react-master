import React, { useContext } from 'react'
import {CSSTransition} from 'react-transition-group'
import { AlertContext } from '../context/alert/alertContext'


export const Alert = () => {

    const { alert, hide } = useContext(AlertContext)

    return (
        <CSSTransition
        in = {alert.visible}
        timeout={{
            enter: 500,
            exit: 350
        }}
        classNames={'alert'}
        mountOnEnter
        unmountOnExit
        >
            <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
                <strong>Увага!: </strong>
                {alert.text}

                 <button onClick={hide} type="button" id="close" className="btn btn-gray btn-sm" aria-label="Close">
                    <span aria-hidden="true">  &#10006;

                    </span>
                 </button>
            </div>
        </CSSTransition>
    )
}