import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function Location({title, location, googleUrl, start, end, imageUrl, info }) {
    return(
        <div className='main--location'>
          <div className='main--location--image'>
            <img 
              className='location--image' 
              src={imageUrl}  
              alt={`${location} image`} 
            />
          </div>
          <div className='main--location--description'>
            <div className='description--header'>
              <FontAwesomeIcon icon={faLocationDot} size="xs" style={{color: "#f55a5a",}} />
              <h6 className='header--country'>{location.toUpperCase()}</h6>
              <a href={googleUrl} className='google--link'>View on Google Maps</a>
            </div>
            <h2 className="description--place">{title}</h2>
            <p className='description--time'>{`${start} - ${end}`} </p>
            <p className='description--paragraph'>
              {info}
            </p>
          </div>
        </div>
    )
}