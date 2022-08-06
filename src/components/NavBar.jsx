import React, {useContext, useRef} from 'react'
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { alertContext } from '../context/alertContext'
import userContext from '../context/user/userContext'

const NavBar = () => {
  let theme = 'dark'
  const { showAlert } = useContext(alertContext)
  const { loggedIn, setloggedIn } = useContext(userContext)
  
  const ref = useRef()
  
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('jwtToken')
    navigate('/login')
    setloggedIn(false)
    showAlert("Logout Successful" , "success")
  }

  return (
    <div style={{ position: 'sticky', top: '0%' , zIndex: '9'}}>
    <Navbar bg={theme} expand="lg">
      <Container fluid >
        <Navbar.Brand  href="/" className={`text-${theme==='secondary'? 'dark': 'primary'} mx-2`} style={{ fontSize: '2rem'}}>TradingJournal</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
              <Nav.Link href="/journal" className={`text-${theme === 'secondary' ? 'dark' : 'secondary'}`}>Journal</Nav.Link>
              {/* <Nav.Link href="/news" className={`text-${theme === 'secondary' ? 'dark' : 'secondary'}`}>Market Highlights</Nav.Link> */}
            {/* <NavDropdown title="Watchlists" id="navbarScrollingDropdown" className={`text-${theme === 'light' ? 'dark' : 'secondary'}`}> */}

              {/* TODO : Add Watchlists from the database */}

            {/* </NavDropdown> */}
            <Nav.Link href="/analytics" className={`text-${theme === 'secondary' ? 'dark' : 'secondary'} `}>
              Analytics
            </Nav.Link>
          </Nav>
          
            <div ref={ref} id='profileButton' style={{ cursor: 'pointer' }} className={`${(loggedIn === true)? '': 'd-none'}`}>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  <img src='https://static.vecteezy.com/system/resources/thumbnails/005/005/788/small/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg' alt='User logo' style={{ verticalAlign: "middle", width: "30px", height: "30px", borderRadius: "50%", position: "center center", marginRight: '1vw' }} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                  <Dropdown.Item onClick={handleLogout} href="/login">LogOut</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              
          </div>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar
