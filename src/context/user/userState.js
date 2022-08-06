import React, { useState } from "react";
import UserContext from "./userContext"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { alertContext } from "../alertContext";

const UserState= (props) => {
    const host = "https://tradingjournal-mern-app.herokuapp.com"
    
    const navigate = useNavigate()

    const [loggedIn, setloggedIn] = useState(false);
    const [userInfo, setuserInfo] = useState({});
    
    const {showAlert} = useContext(alertContext)
    
    const userSignUp =  async ( name, email, password ) => {
        const response = await fetch(`${host}/api/auth/createuser`, {
            method: 'POST', 
           headers: {
               'Content-Type': 'application/json'
           } ,
           body: JSON.stringify({ name, email, password })
        })
        const res = await response.json()
        if (res.success) {
        localStorage.setItem('jwtToken', res.jwtToken)
            setloggedIn(true)
            navigate('/')
            showAlert("SignUp Successful", 'success')
        }
        else {
            showAlert(res.error, 'danger')
        }
    }
    const userLogIn = async ( email, password ) => {
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST', 
           headers: {
               'Content-Type': 'application/json'
           } ,
           body: JSON.stringify({ email, password })
        })
        const res = await response.json()
        if (res.success) {
            localStorage.setItem('jwtToken', res.jwtToken)
            setloggedIn(true)
            navigate('/')
            showAlert("Login Successful", 'success')
        }
        else {
            showAlert(res.error, 'danger')
        }
    }

    const getUserInfo = async () => {
        const response = await fetch(`${host}/api/auth/userinfo`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'jwt-token': localStorage.getItem('jwtToken')
            }
        })
        const json = await response.json()
        if (json.success) {
            setuserInfo(json.userInfo)
        }else{
            showAlert(json.error, "danger")
        }

    }

    return (
        <UserContext.Provider value={{ userLogIn, userSignUp, loggedIn, setloggedIn, getUserInfo, userInfo }} >
        {props.children}
    </UserContext.Provider>
    )
}
export default UserState;