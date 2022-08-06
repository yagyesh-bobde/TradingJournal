import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    BrowserRouter as Router 
} from 'react-router-dom'
import App from './App' 
import { AlertState } from './context/alertContext'



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Router>
        <AlertState>
        <App />
        </AlertState>
    </Router>
)