import React,{useContext,useState} from 'react'
import { Button, Form, Row } from 'react-bootstrap'
import journalContext from '../context/journal/journalContext';

const AddNote = ({ item={_id:'', ticker:'',body:'',pnl: 0} , edit = false, setmodalShow }) => {
    const { addNote,editNote } = useContext(journalContext)
    
    const [stock, setstock] = useState({ ticker: item.ticker, body: item.body, pnl: item.pnl });

    const handleChange = (e) => {
        setstock({ ...stock, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!edit) { 
            addNote(stock.ticker, stock.body, stock.pnl)
        }
        else {
            editNote( item._id, stock.ticker, stock.body, stock.pnl)
            setmodalShow(false)
        }
        setstock({ ticker: '', body: '', pnl: 0})
    }
  return (
      <>
          <Form onSubmit={handleSubmit}>
              <div style={{ display: 'flex' }}>
                  <Form.Group className="mb-3" controlid="formBasicEmail">
                      <Form.Label>Ticker</Form.Label>
                      <Form.Control controlid='ticker' name='ticker' value={stock.ticker} onChange={handleChange} type="text" placeholder="Enter Ticker/Company name" minLength={2} required/>
                  </Form.Group>

              </div>
              <Form.Group className="mb-3" controlid="formBasicPassword">
                  <Form.Label>Trading Plan</Form.Label>
                  <Form.Control onChange={handleChange} name='body' controlid='body' value={stock.body} type="textarea" placeholder="Trading Plan" minLength={5} required/>
              </Form.Group>
              <Form.Group className="mb-3" >
                  <Form.Label>Profit/Loss</Form.Label>
                  <Form.Control type='Number' name='pnl' onChange={handleChange} controlid='pnl' value={stock.pnl} placeholder='PnL' />
              </Form.Group>
              <Row className='my-4' style={{ margin: '10%', marginTop: '5vh'}}>
                  {/* <Col md={{ span: 5, offset: 5 }} className='my-5'> */}
                  <Button variant="primary" style={{ marginTop: '5vh' }}  type="submit">
                      {(!edit) ?'Add Stock': 'Edit entry'}
                  </Button>
                  {/* </Col> */}
              </Row>
                
          </Form>
      </>
  )
}

export default AddNote
