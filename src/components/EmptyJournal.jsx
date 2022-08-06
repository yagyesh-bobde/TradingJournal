import React from 'react'
import AddNote from './AddNote'

const EmptyJournal = () => {
  return (
    <div className='container my-4' style={{ width: '95%' }}>
          <div className='row'>
        <div className="row bg-secondary text-center" style={{ borderRadius: '10%', color: 'white', fontFamily: 'auto', paddingTop: '3%', paddingLeft: '7%', paddingRight: '7%' }}>
                  <h1>Create Your First Trading Plan.</h1>
                  <AddNote />
              </div>
         <div className='row text-center' style={{ marginTop: '-2%', zIndex: '-1'  }}>
                  <div >
                      <img src='https://png.pngtree.com/png-vector/20190701/ourlarge/pngtree-empty-box-icon-for-your-project-png-image_1533458.jpg'
                          alt='Empty journal'
                          style={{ maxWidth: '20%' }} ></img>
                  </div>
              </div>
          </div> 
    </div>
  )
}

export default EmptyJournal
