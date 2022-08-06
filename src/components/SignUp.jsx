import React, { useContext, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import userContext from '../context/user/userContext';

const SignUp = () => {
    const [creds, setcreds] = useState({
        name: '',
        email: '',
        password: ''
    });
    const onChange = (e) => {
        setcreds({ ...creds, [e.target.name]: e.target.value })
    }
    const { userSignUp } = useContext(userContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        userSignUp(creds.name, creds.email, creds.password)
    }
  return (
      <div style={{ marginTop: '-5%', width: '100%' }}>
          <Container className="bg-white" style={{ marginTop: '10%', fontSize: '2rem' }}>
              <div className='row' style={{ margin: 'auto', width: '70%'}}>
                  <div className="col-md-4 col-12 text-center">
                      <div className='my' style={{ marginTop: '30%'}}>
                          <img className='img-fluid' src='https://cdn-icons-png.flaticon.com/512/5087/5087579.png' alt='login logo' ></img>
                      </div>
                  </div>
                  <div className="col-8" style={{ maxWidth: '40%', marginLeft: 'auto', marginRight:'auto' , marginTop:'-3%'}}>
                      <Form onSubmit={(e) => handleSubmit(e)}>
                          <Form.Group className="mb-1" controlId="formBasicEmail">
                              <Form.Label style={{ fontSize: '1.75rem'}}>Your Name</Form.Label>
                              <Form.Control type="text" controlid='name' value={creds.name} onChange={(e) => onChange(e)} name='name' placeholder="Enter your name" minLength={3} required />
                          </Form.Group>
                          <Form.Group className="mb-1" controlId="formBasicEmail">
                              <Form.Label style={{ fontSize: '1.75rem'}}>Email address</Form.Label>
                              <Form.Control type="email" controlid='email' value={creds.email} onChange={(e) => onChange(e)} name='email' placeholder="Enter email" minLength={5} required />
                          </Form.Group>

                          <Form.Group className="mb-1" controlId="formBasicPassword">
                              <Form.Label style={{ fontSize: '1.75rem'}}>Password</Form.Label>
                              <Form.Control type="password" controlid='password' value={creds.password} name='password' onChange={(e) => onChange(e)} placeholder="Password" minLength={5} required />
                          </Form.Group>
                          <Button variant="primary" type="submit" >
                              Sign me up!
                          </Button>
                      </Form>
                      <p style={{ fontSize: '1rem', fontFamily: 'initial', marginTop: '5%' }}>Already a user? <Link to='/login'>Login </Link>instead!</p>
                  </div>
              </div>
          </Container>
      </div>
  )
}

export default SignUp
