import React, {useState, useEffect} from 'react';
import cloud from '../images/cloud.png';
import rain from '../images/rain.png';
import sun from '../images/sun.png'
import dull from '../images/dull.png'
export default function Now({weather, main}){
    const [icon, setIcon] = useState(sun);
    useEffect(() =>{
        if(weather.description.includes('дождь')){
            setIcon(rain)
        }
        if(weather.description.includes('облачно')){
            setIcon(cloud)
        }
        if(weather.description.includes('пасмурно')){
            setIcon(dull)
        }
        if(weather.description.includes('ясно')){
            setIcon(sun)
        }
    })

    return(
        <div className='nowContainer'>
            <h2>Сейчас</h2>
            <div className='iconContainer'>
                <img src={icon} alt='' />
            </div>
            <h2>{main.temp.toFixed(1)}&#176;</h2>
        </div>
    )
}