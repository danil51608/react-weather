import React, { useState, useEffect} from 'react';
import cloud from '../images/cloud.png';
import rain from '../images/rain.png';
import sun from '../images/sun.png'
import dull from '../images/dull.png'
export default function InfoOnDay({dayInfo}){
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
    const mili = dayInfo.dt_txt
    const d = new Date(mili);
    const [icon, setIcon] = useState(cloud)
    useEffect(() =>{
        if(dayInfo.weather[0].description.includes('дождь')){
            setIcon(rain)
        }
        if(dayInfo.weather[0].description.includes('облачно')){
            setIcon(cloud)
        }
        if(dayInfo.weather[0].description.includes('пасмурно')){
            setIcon(dull)
        }
        if(dayInfo.weather[0].description.includes('ясно')){
            setIcon(sun)
        }
    })
    return (
        <div className="InfoOnDay">
            <h2>{days[d.getDay()]}</h2>
            <div className='iconContainer'>
                <img src={icon} alt='' />
            </div>
            <h3>{dayInfo.main.temp.toFixed(1)}&#176;</h3>
        </div>
    )
}