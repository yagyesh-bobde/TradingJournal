import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import ModalForm from './ModalForm'


const JournalItem = ({ item, color, deleteNote }) => {

  const [modalShow, setmodalShow] = useState(false);

  const location = useLocation()
  const handleShow = () => {
    setmodalShow(true)
  }


  return (
    <div className={`container col-12 col-lg-${(location.pathname === '/journal')? 6: 12}` }>   
     <Card className={`my-2 bg-${color} `} >
      <Card.Header className='d-flex text-center align-items-center' style={{ justifyContent : 'space-between'}}>
         <Card.Title>{item.ticker}</Card.Title>
         <div >
            {/* <i onClick={() => deleteNote(item._id)} className='fa-solid fa-trash mx-2' ></i> */}
            <i onClick={handleShow} className='fa-solid fa-pen-to-square mx-2' ></i>
          </div>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          {item.body}
        </Card.Text>
        <Card.Footer className='text-center'>
          { !(item.pnl ===0 || !item.pnl) ?<h4>Profit/Loss: Rs.{item.pnl}</h4> 
          : <h4>No Trade</h4>}
        </Card.Footer>
      </Card.Body>
    </Card>

    <ModalForm modalShow={modalShow} setmodalShow={setmodalShow} stock={item}/>
    </div>

  )
}

export default JournalItem
