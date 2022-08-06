import React, { useContext, useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import { useNavigate } from 'react-router-dom'
import journalContext from '../context/journal/journalContext'
import userContext from '../context/user/userContext'
import EmptyJournal from './EmptyJournal'
import Journal from './Journal'

const JournalPage = () => {
    const { notes, getJournal} = useContext(journalContext)
    const { setloggedIn } = useContext(userContext)
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem('jwtToken')) {
            setloggedIn(true)
            getJournal()
        }
        else {
            navigate('/login')
        }
        // eslint-disable-next-line
    }, []);


    const [value, setValue] = useState(new Date());
    const [newNotes, setnewNotes] = useState(null);
    const [date , setDate] = useState('');


    const onChange = (e) => {
        setValue(e)
        try {
            const filterNotes = 1;
            setnewNotes(notes.filter((note) => (((new Date(`${note.date}`)).toDateString()) === (value.date.toDateString()))))
            console.log(newNotes)
        } catch (error) {
            console.log(error)
        }       
        const a = value.toDateString().split(' ')
        setDate(`${a[1]},${a[2]}`)
    }
  return (
      <div className= 'my-3' style={{ maxHeight: '80vh' , margin:'auto' }}>
        <div style={{ maxHeight:'80vh' ,overflowY: 'auto'}}>
              <div className="row" >
                  <div className="col-12 col-lg-4">
                      <div className='my-2 mx-5' style={{ position: 'sticky', top: '30%' }}>
                          <Calendar onChange={(e) => onChange(e)} value={value} />
                          {
                              !(value.getDate() === (new Date()).getDate()) && <h3>Filtered notes:<u>{`${date}`}</u></h3>
                          }
                          <p>
                            Filtering features will be updated soon
                          </p>
                      </div>
                  </div>
                  <div className="col-12 col-lg-8" >
                    {!(notes.length===0) && <Journal />}
                    {(notes.length===0) && <EmptyJournal />}               
                  </div>
              </div>
          </div>
    </div>
  )
}

export default JournalPage
