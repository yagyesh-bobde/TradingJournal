import React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Footer = () => {
  return (
      <div className='row bg-dark text-center text-white'>
        <div className='row' style={{ marginTop: '2%' }}>
            <p>This project is a Full-Stack web development project using MERN stack.The code for this project can be found 
                {/* TODO: ADD THE PROJECT LINK HERE */}
            <a href=''> here.</a>.</p>
        </div>
        <div className="row" style={{ width: '10%', marginLeft: '45%' }}>
            <ButtonGroup aria-label="Basic example">
                <div className='col mx-2' style={{ width: '20%', height:'25%'}}>
            <a href='https://www.linkedin.com/in/bobde-yagyesh/' rel="noopener" target={'_blank'}>
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                </div>
                <div className='col mx-2' style={{ width: '20%', height:'25%'}}>
                      <a href='https://github.com/yagyesh-bobde' rel="noopener" target={'_blank'}>
                      <i className="fa-brands fa-github"></i>
                      </a>
                </div>
                <div className='col mx-2' style={{ width: '20%', height:'25%'}}>
                      <a href='https://twitter.com/bobde_yagyesh' rel="noopener" target={'_blank'}>
                      <i className="fa-brands fa-square-twitter"></i>
                  </a>
                </div>
  
                
            </ButtonGroup>
        </div>
    </div>
  )
}

export default Footer
