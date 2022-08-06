import React, { useContext } from 'react';
import NavBar from './components/NavBar';
import {
  Routes,
  Route
} from 'react-router-dom'
import { About, Home, Profile, Watchlists, Analytics, Market, Footer, Login, SignUp, JournalPage, News } from './components/index'
import JournalState from './context/journal/journalState';
import UserState from './context/user/userState'
import { Alert } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { alertContext } from './context/alertContext';
import { NewsState } from './context/newsContext';

const App = () => {
  const { alert } = useContext(alertContext)
  
  return (
    <>
      <UserState >
      <NavBar  />
      <Alert className={`${alert.display}`} key={alert.message} variant={alert.type}>
        {alert.message}
      </Alert> 
      <JournalState>
      <NewsState>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
        
          <Route exact path='/journal' element={<JournalPage />} />
          <Route exact path='/analytics' element={<Analytics />}/>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/news' element={<News />} />
          <Route exact path='/profile' element={<Profile />} />

  {/* TODO: Work on these routes using APIs */}
          <Route exact path='/market' element={<Market />} />
          <Route exact path='/about' element={<About />}/>
          {/* TODO: Create a new Table in monogoDB for this */}
          <Route exact path='/watchlists' element={<Watchlists />}/>

        </Routes>
        </NewsState>
        <div style={{
          position: 'fixed',
          left: 0,
          bottom: 0,
          width: '100%'
          }}>
          <Footer />
        </div>
        
      </JournalState>
      </UserState>
    </>
  )
}

export default App
