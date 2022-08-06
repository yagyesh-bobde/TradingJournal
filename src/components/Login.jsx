import React, { useContext, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import userContext from '../context/user/userContext'

const Login = () => {
    const [creds, setcreds] = useState({ 
        email: '',
        password: ''
    });
    const onChange = (e) => {
        setcreds({...creds, [e.target.name]: e.target.value})
    }
    const { userLogIn } = useContext(userContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        userLogIn(creds.email, creds.password)
    }

    return (
        <div style={{ marginTop: '-5%', width:'100%' }}>
        <Container className="bg-white" style={{ marginTop: '10%', fontSize: '2rem' }}>
            <div className='row' style={{ margin:'auto', width: '70%'}}>
                <div className="col-md-4 col-12 text-center">
                    <div className='my-md-5'>
                         <img className='img-fluid' src='https://cdn-icons-png.flaticon.com/512/5087/5087579.png' alt='login logo' ></img>
                    </div>
                </div>
                <div className="col-8" style={{ maxWidth: '40%', margin: 'auto' }}>
                        <Form onSubmit={(e) => handleSubmit(e)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" controlid='email' value={creds.email} onChange={(e) => onChange(e)} name='email' placeholder="Enter email" minLength={5} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                                <Form.Control type="password" controlid='password' value={creds.password} name='password' onChange={(e) => onChange(e)} placeholder="Password" minLength={5} required />
                        </Form.Group>
                            <Button variant="primary" type="submit" >
                            LogIn
                        </Button>
                    </Form>
                        <p style={{ fontSize: '1rem', fontFamily: 'initial', marginTop: '5%' }}>New user? <Link to='/signup'>Sign up </Link>instead!</p>
                </div>
            </div>
        </Container>
        </div>
    )
}

export default Login
