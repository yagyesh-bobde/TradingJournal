import React, { createContext, useState } from 'react'

export const alertContext = createContext()

export const AlertState = (props) => {
    const [alert, setalert] = useState({
        message: '',
        type: '',
        display: 'd-none'
    });

    const showAlert = (message, type) => {
        console.log(message)
        setalert({
            message: message,
            type: type,
            display: 'd-block'
        })
        setTimeout(() => {
            setalert({
                message: '',
                type: '',
                display: 'd-none'
            })
        }, 1500);
    }
    return (
        <alertContext.Provider value={{ alert, showAlert}}>
            {props.children}
        </alertContext.Provider>
    )
};