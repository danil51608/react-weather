import React from 'react';
import Now from './now'
import BarHours from './BarHours'
export default function InfoBar({weather, main, daysWeather}) {
    const number = [1,2,3,4,5];
    console.log(daysWeather)
    return(
        <div className="InfoBar">
            <Now weather={weather} main={main}/>
            {number.map( x => {
                return daysWeather[x] ? <BarHours hourInfo={daysWeather[x]} key={x}/> : ''
            })}
        </div>
    )
}