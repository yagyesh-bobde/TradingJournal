import React, { useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import journalContext from '../context/journal/journalContext'
import userContext from '../context/user/userContext'
import LineChart from './charts/LineChart'
import { Alert } from 'react-bootstrap'

const Analytics = () => {
  const { notes, summary,setsummary,getJournal } = useContext(journalContext)
  const {  setloggedIn } = useContext(userContext)
  
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('jwtToken')) {
      navigate('/login')
    }
    else {
      setloggedIn(true)
      getJournal()
      setsummary([
        {
          key: "Journal Entries",
          value: notes.length,
        },
        {
          key: 'No of days traded',
          value: notes.filter((note) => note.pnl !== 0).length
        },
        {
          key: 'Winning Days',
          value: notes.filter((note) => note.pnl > 0).length
        },
        {
          key: 'Lossing Days',
          value: notes.filter((note) => note.pnl < 0).length
        },
        {
          key: 'Winning Rate',
          value: `${parseInt((notes.filter((note) => note.pnl > 0).length) * 100 / (notes.filter((note) => note.pnl < 0).length))}%`
        },
    {
            key: 'Total Profit/Loss',
            value: 'Rs.' ,
        }
      ])
    }
    // eslint-disable-next-line
  }, []);
  const [copysum, setcopysum] = useState([]);
  useEffect(() => {
    setcopysum(summary)
  }, [summary]);

  return (
    <div className='bg-whiet' style={{ minHeight: '80vh', minWidth:'100%'}}>
      <Alert variant='warning'>
        The Graphs are set to demo values and will be updated soon.
      </Alert>
      <div className='row'>
       
        <div className="col-md-5 col-12 bg-white" style={{ borderRadius: '20%', marginLeft: '5%', marginTop: '2%', padding: '1%'}}>
            <h4 className='d-block text-center'>Journal Summary</h4>
          <div className="row text-center" style={{ alignItems: 'center' , fontFamily: 'cursive', paddingLeft:'10%'}}>
            {summary.map((obj)=> {
              return (
                <div key={obj.key} className='col-md-4 col-12 mx-1 my-1' style={{  border: '2px solid black'}}>
                  <p>{obj.key}</p>
                  <span style={{ color:'grey' }}>{obj.value}</span>
                </div>
              )
            })}
          </div>
        </div>
        
        <div className="col-md-6 col-12 bg-white text-center" style={{ borderRadius: '20%', padding: '1%', border:'solid'}}>
           {/* <PieChart /> */}
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrWl3NFJnWwwjlBSSbNxJcQ2EpYbFhtX4M0Q&usqp=CAU' alt='journal summary' height={250} width={250}></img>
          <div className='text-center'>
            <h3>Name</h3><u>Test User</u>
          </div>
          </div>

      </div>
      <div className="row text-center my-3">
        <div style={{ maxWidth: '80%', margin:'auto', maxHeight:'80%'}}>
        <LineChart />
        </div>
      </div>
    </div>
  )
}

export default Analytics
