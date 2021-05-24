import React from 'react';
import InfoOnDay from './InfoOnDay';
export default function InfoDays({daysWeather}){
    const number = [0, 8, 16, 24, 32];
    return(
        <div className='InfoDays'>
            {number.map(x =>{
                return daysWeather[x] ? <InfoOnDay key={x} dayInfo={daysWeather[x]}/> : 'Loading...'
            })}

        </div>
        
    )
}