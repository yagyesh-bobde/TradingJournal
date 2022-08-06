import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import userContext from '../context/user/userContext'

const Profile = () => {
  const navigate = useNavigate()
  const { setloggedIn, userInfo, getUserInfo } = useContext(userContext)

  useEffect(() => {
    if (localStorage.getItem('jwtToken')) {
      setloggedIn(true)
      getUserInfo()
    }
    else {
      navigate('/login')
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div className='bg-white' style={{ minHeight:'80vh'}}>
      <div className="row" style={{ marginTop: '15%'}}>
       
        <div className="col-md-4 col-12 text-center" style={{ borderRight: 'solid' }}>
          <img className='img-fluid' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBCAMAAADQfiliAAAAYFBMVEX///8AAADu7u74+PjCwsKTk5MLCwtaWlqEhIT19fViYmLa2tpNTU37+/sVFRWxsbExMTHIyMiampp8fHwdHR1sbGw2NjYlJSWqqqo8PDzk5OTT09OioqIrKyu8vLxBQUHQCv6+AAAE6UlEQVR4nO1b2cKyOgxsC4hQEBVwQ/3e/y1/ERGQLpMC59ww17UNaZZJUhlzgaj8LMjjZF9s+KbYJ3EeZH4lnPaiHy4v5enMVTifyotcWAxxKa/Kwztcy8tiQoh7aDm9RXhfQIjIT8DjGyR+NOv5IjiRzq9xCuZThNjuyOfX2G3nkcHbOh3fYOtNP/844fwax4kyHP4mCsD532GKAqZcQAf3q/A3swjA+cZ3Oj+dRwENtildgBsaADGEN6oAlVsI0GNX0QTIZj6/RkYRIFhAAM4DXIB8EQE4z1EByoUE4Lz8vwUARVjqChoAF0Exwk1xfjwe54ISO63miLthcnzKhgdF8nnEGZTFKStwm/Dym228CxpEjaHphkXCWKrCfCpj6Nc7Q4BOoc8wJHyMToT6NAVlw6NJiQyiVFvdr33gxw9bgqkewC4avuABTpXYk+wNcIuNmjUBd5AgZUgEiKC8h4P9dyeM8HlAeaOwZs9uxmeU59zUtXUff+OPAYwYp92APkcu5dl/QyAYSHb5VYLdDB8EARiz++SPMQq7zDTOD8SWYVlrV0FCEoAxu0sOlCDsGYla9tiVsOsrwW44CbXoSe1K6Jl2ZA8h5nykgt29T12EBcyGXHSxm33T7mbtClOEMBuAIPu1bsAVtRndACDTtbZ4ty+9OEhwsW97/ywFuBmx8H0DYL1hsxK4BO7SlsP3BbTFHQRgDNi3uV2kTlxKgncdKWzd8iUluNbXIIGFi0nAJcPMYDkJakOA2gVL+cLbEKC+vUtnFiCLr+z0ktTOa7lLagQLuLMA63W4B9UD1oypoGKR8z19ZhPtoZ19tGkiyRJAXl63VMC+Ef0awI5YgC48Uf1RgLOxnGGdF2JXmOEtsRhgaA1oJRNSNDVIGGaxvOMzGADe1WDPCnQppzhkBO9aMLwfCral38B70xsogX2A01Uo335A0AHnT1CAJ2HPDcEOXrUmFhklZUZV4L7wXo6IICkf9fIF2rMCoIjHUt0XCRwTW9iYAnVSHtNHKrEpQwjqB73ygsNgT68Gh6cCgdtsU/nSRcCRuI+MajgfFOVh2NO4HUqSC3zhw3OdEXbhNpMiZamQ2TZ0HlNXIFceIT5mBymiur+VRkIesiPZBt94cWWsXuhjn2fqNBllOSm+1XjVC8QR6ymXpiwdyZz2RXXCpeSx69NOF8UTKcZb1PkWZNUvhGjtdsDfb9SJBuof1OdTSgYJyvDuH2CGsCdzZcgoG96FGEJOL98FknEa2gXU+W7PqoDy/fNhtjsrXZ/YCdsFf/qJNm7v8prpA9urqrYGMV+DS/Oigzlff5VrYmooP9bBxJu7yZEhQ0952tfAYI8d6dTPWKZqoIZWC70Zi5aquTT1x9AFnP4IVTNro5XLeqidbTBrU89DXAYragDbqxzyOv2dbQtPlf1+4pxCSvp4TQ/F4O1Xw+PZ+zxW2GJsjSMN/waveFYB2Kg6HIfa3/EgvYVpxg8VUw0wh7GL8twBwzDmKGPtwBhnF2A48FA7ev890rxm2KBnjJr3SL0EVbhTAj3SrrDU9kG+9zBXOB7iG5z1wbZ9m/dY5r8w4tPpNbzNa98nukxUEDTs2fQ+sZ1Wzx0LWjQxwTJFzzTRYha8o5619AmmclMTjlCoy50eG2CoMBObOyf9V3uvWLFixYoVK1asmBH/ACiYPJU5723YAAAAAElFTkSuQmCC' alt='user' />
        </div>
       
        <div className="col-md-8 col-12 text-center">
          
          <div className="row">
            <form>
              <label htmlFor="lname">Name</label><br />
              <input disabled type="text" id="lname" name="lname" value={userInfo.name}/>
              <div className='btn'>
                <i className="fa-solid fa-user-pen"></i>
              </div>
            </form>
          </div>
          <div className='row' >
            <form>
              <label htmlFor="lname">Your Email</label><br />
              <input disabled type="text" id="email" name="email" value={userInfo.email}/>
              <div className='btn'>
                <i className="fa-solid fa-user-pen"></i>
              </div>
            </form>
          </div>

        </div>
      
      </div>
    </div>
  )
}

export default Profile
