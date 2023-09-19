import Header from './component/header'
import Location from './component/location'
import Data from './data'
import './App.css'

function App() {
    
    const database = Data.map( item =>  {
            return <Location 
                    title={item.title}
                    imageUrl={item.imageUrl} 
                    location={item.location} 
                    googleUrl={item.googleMapsUrl} 
                    start={item.startDate} 
                    end={item.endDate} 
                    info={item.description} 
                  />})

  return (
    <>
      <Header />
      <div className='main'>
       {database} 
      </div>
    </>
  )
}

export default App
