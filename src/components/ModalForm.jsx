import React from 'react'
import { Modal } from 'react-bootstrap'
import AddNote from './AddNote';

const ModalForm = ({ modalShow, setmodalShow, stock }) => {

    const handleClose = () =>{
        setmodalShow(false)
    }


  return (
    <div>
          <Modal
              show={modalShow}
              onHide={handleClose}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
          >
              <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                      Editing A Journal Entry
                  </Modal.Title>
              </Modal.Header>
             
              <Modal.Body>
                  <AddNote item={stock} edit={true} setmodalShow={setmodalShow} />
              </Modal.Body>
          </Modal>
    </div>
  )
}

export default ModalForm
