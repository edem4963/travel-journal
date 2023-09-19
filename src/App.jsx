import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import './App.css'

function App() {
 

  return (
    <>
      <div className='header'>
          <FontAwesomeIcon icon={faEarthAmericas} size="xl" style={{color: "#ffffff",}} />
          <h4 className='header--title'>My Travel Journal.</h4>
      </div>
      <div className='main'>
        <div className='main--location'>
          <div className='main--location--image'>
            <img 
              className='location--image' 
              src="https://source.unsplash.com/WLxQvbMyfas"  
              alt="japan image" 
            />
          </div>
          <div className='main--location--description'>
            <div className='description--header'>
              <FontAwesomeIcon icon={faLocationDot} size="xs" style={{color: "#f55a5a",}} />
              <h6 className='header--country'>JAPAN</h6>
              <a href='#' className='google--link'>View on Google Maps</a>
            </div>
            <h2 className="description--place">Mount Fuji</h2>
            <p className='description--time'>12 Jan, 2021 - 24 Jan, 2021</p>
            <p className='description--paragraph'>
              Mount Fuji is the tallest mountain in Japan, 
              standing at 3,776 meters (12,380 feet). 
              Mount Fuji is the single most popular tourist site in Japan, 
              for both Japanese and foreign tourists.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
