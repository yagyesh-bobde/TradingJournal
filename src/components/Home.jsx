import React, { useEffect, useContext } from 'react';
import 'react-calendar/dist/Calendar.css';
import { AddNote, Journal, News } from './index'
import {
     useNavigate
} from 'react-router-dom'
import journalContext from '../context/journal/journalContext';
import userContext from '../context/user/userContext';
import { newsContext } from '../context/newsContext';


const Home = () => {
    const { notes , getJournal  } = useContext(journalContext)
    const { setloggedIn } = useContext(userContext)
    const { news, getNews } = useContext(newsContext)

    const navigate = useNavigate()
    
    useEffect(() => {
        if (!localStorage.getItem('jwtToken')) {
            navigate('/login')
        }
        else{
            setloggedIn(true)
            getJournal()
            getNews()
        }
        // eslint-disable-next-line
    }, []);
   console.log(notes)
    return (
        <div style={{ width: '100%', background: 'linear-gradient(to bottom right, #6c757d, black)' }}>
        <div className='row' style={{ minHeight: '90vh'}} >

            {/* Add Note Form */}
                <div className='col-12 col-md-8 m-auto'>
                    <div className='bg-white border' style={{ borderRadius: '10%',fontSize:'1.5rem', fontFamily: 'auto', padding: '4%', marginBottom:'10%', marginLeft: "5%", marginRight: '5%' }}>
                     <AddNote/>
                </div>
            </div>

            {/* Right Side of the Home */}
                <div className={`col-md-4 col-12 bg-dark`} style={{ paddingLeft: '3vw', maxHeight: '80vh', overflowY: 'auto' }} > 
                // * You can use this to hid the right side columndisplay: `${ !(notes === [])? 'inline': 'none' }`
                    <div className="" style={{maxHeight: '78vh', overflowY: 'auto' }}>
                        <h3 className='text-center' style={{ color: 'white', fontFamily:'monospace'}}>Journal Entries</h3>
                    <Journal />
                    </div>
                </div>
        </div>
        
        {/* TODO: MARKET NEWS PAGE */}
            {news && 
                <div className='row' style={{ mminHeight: '100%', padding: '' }}  >
                <div className='text-center' style={{ background: "white" , fontFamily: 'monospace'}}>
                    <h1>Top Market Headlines</h1>
                </div>
                <div className="container" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
                    <div className="row" style={{ padding: '2%'}}>
                        <News  />
                    </div>
                </div>
            </div>}
        </div>
    )
};

export default Home;
