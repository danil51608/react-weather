import React from 'react';
import '../css/info.css'
import background from '../images/1.jpg'
import InfoBar from './infobar'
import InfoDays from './InfoDays'
export default function Info({info, weather, main, daysWeather}){
    console.log(weather[0])
    console.log(main)
    console.log(daysWeather)
// export default function Info(){
    return (
            <div className='infoContainer'>
                <div className='mainInfo' style={{fontWeight: '100'}}>
                    <h2>{info.name}</h2>
                    <h3>{weather[0] === undefined ?  'Loading...' : weather[0].description}</h3>
                    {main === undefined ? 'Loading...' : <h2>{Math.round(main.temp)}&#176;</h2>}
                    {/* <h2>{main === undefined ? 'Loading...' : main.temp }&#176;</h2> */}
                    <h3>Ощущается как {main === undefined ? 'Loading...' : main.feels_like.toFixed(1) }&#176;</h3>
                </div>
                {weather[0] === undefined || main === undefined || daysWeather === undefined ?  'Loading...' : <InfoBar weather={weather[0]} main={main} daysWeather={daysWeather}/>}
                <InfoDays daysWeather={daysWeather}/>
            </div>
        
    )
}