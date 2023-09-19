import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons' 

export default function Header() {
    
    return(
        <div className='header'>
          <FontAwesomeIcon icon={faEarthAmericas} size="xl" style={{color: "#ffffff",}} />
          <h4 className='header--title'>My Travel Journal.</h4>
      </div>
    )
}

