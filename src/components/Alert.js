import React, {useContext} from 'react'
import {CSSTransition} from 'react-transition-group'
import {AlertContext} from '../context/alert/alertContext'

export const Alert = () => {
    const {alert, hide} = useContext(AlertContext)

    return (
        <CSSTransition
            in={alert.visible}
            timeout={{
                enter: 500,
                exit: 350
            }}
            classNames={'alert'}
            mountOnEnter
            unmountOnExit
        >
            {/*<div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>*/}
            <div className={`alert alert-${alert.type || 'warning'} alert-dismissible fade show`} role="alert">
                <strong>Внимание!</strong>
                &nbsp;{alert.text}
                <button onClick={hide} type="button" className="btn-close" aria-label="Close">
                    <span aria-hidden="true"></span>
                </button>
            </div>
        </CSSTransition>
    )
}
