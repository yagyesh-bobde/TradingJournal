import React, { useContext, useEffect } from 'react'
import { newsContext } from '../context/newsContext'
import Card from 'react-bootstrap/Card';
import moment from 'moment'

const News = () => {
    const { news  } = useContext(newsContext)

    const missing_image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'
  return (
    <div>
           <div className='row' >
              {news.map(( newsItem , idx) => (
                  <div className='col-4  my-3' key ={idx}>
                      {/* <Link id='news-link' to={{ pathname: newsItem.link }} style={{ cursor: 'pointer'}} target='_blank' > */}
                      <Card style={{  backgroundColor:'white', borderRadius:'10%'}}>
                          <img style={{ margin: 'auto', paddingTop: '3%'}} src={`${newsItem.media? newsItem.media: missing_image}`} width={360} height={240} alt='news thumbnail'/>
                          <Card.Body>
                              <Card.Title>{newsItem.title.slice(0,50)}</Card.Title>
                              <Card.Text>
                                  {newsItem.summary.slice(0,200)}
                              </Card.Text>
                          </Card.Body>
                          <Card.Footer className='' >
                              <div className="d-flex" style={{ justifyContent: 'space-between' }}>
                                <h4> {newsItem.author}</h4>
                                <p style={{ marginLeft: '1vw' }} disabled>updated {moment(newsItem.published_date).startOf('ss').fromNow()}</p>
                              </div>
                              <div className="row text-center d-flex" style={{ alignItems: 'center'}}>
                                  <a href={`${newsItem.link }`} target={'_blank'} rel=''>
                                <i className="fa-solid fa-up-right-from-square"></i>
                                <p>Read the Full Article</p>
                                </a>
                              </div>
                          </Card.Footer>
                      </Card>
                     
                  </div>
              ))}
          </div>
                    
          {/* <Spinner style={{ marginTop: '10%', marginLeft:'50%' }} animation="border" /> */}
    </div>
  )
}

export default News
