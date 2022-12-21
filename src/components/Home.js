import {React,useState} from 'react'
import axios from "axios";

function Home() {
    const [location, setLocation] = useState('')
    const [data, setData] = useState({})

    const url = `${process.env.REACT_APP_Base_URL }${location}&appid=${process.env.REACT_APP_API_Key}${process.env.REACT_APP_Next_URL}`
    const searchLocation = (event) =>{
     if(event.key =='Enter') {
        axios.get(url).then((response) => {
        setData(response.data)
        console.log(data)
        
        })
     setLocation('')

    }
    
    }
 
    return (
    <div className='home'>

        <div className='location'> 
            <input type = 'text' 
                   placeholder='Enter Location' 
                   value={location} 
                   onChange = { (event) => setLocation(event.target.value)  }
                   onKeyPress = {searchLocation}
                   /> 
        </div>

        <div className='container'> 
        
            <div className='top'>
                <div className='loc'>  
                    <p>{data.name}</p>
                </div>
               
                <div className='temp'> 
                    <h1>{data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}</h1>
                </div>
                
                <div className='descript'>
                    <p> {data.weather ? <p>{data.weather[0].main}</p> : null}</p>
                </div>
           
            </div>

            <div className='bottom'>
                <div className='feels'>
                        <h3> {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null} </h3>
                        <p>Fells Like</p>
                </div>
               
                <div className='humidity'>
                {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}                    <p>Humidity</p>
                </div>
               
                <div className='winds'>
                    <h3>{data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null} </h3>
                    <p>Wind Speed</p>
                </div>

            </div>
        
        </div>
    
    </div>

  )
}

export default Home