import React, {useState, useEffect} from 'react';
import cloud from '../images/cloud.png';
import rain from '../images/rain.png';
import sun from '../images/sun.png'
import dull from '../images/dull.png'
export default function BarHours({hourInfo}){
    
    const [icon, setIcon] = useState(cloud)
    useEffect(() =>{
        if(hourInfo.weather[0].description.includes('дождь')){
            setIcon(rain)
        }
        if(hourInfo.weather[0].description.includes('облачно')){
            setIcon(cloud)
        }
        if(hourInfo.weather[0].description.includes('пасмурно')){
            setIcon(dull)
        }
        if(hourInfo.weather[0].description.includes('ясно')){
            setIcon(sun)
        }
    })
    return(
        <div className='daysContainer'>   
             <h2>{hourInfo.dt_txt.substring(11,13)}</h2>
            <div className='iconContainer'>
                <img src={icon} alt='' />
            </div>
            <h2>{Math.round(hourInfo.main.temp)}&#176;</h2>
        </div>
    )
}