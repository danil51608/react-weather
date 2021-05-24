import React, { useState, useEffect } from 'react';
import rainClip from '../videos/rain.mp4';
import sunnyClip from '../videos/sunny.mp4';
import dullClip from '../videos/cloudy_black.mp4'
import '../App.css'
export default function Background({ weather }){
  const [clip, setClip] = useState(sunnyClip)
  console.log(clip)
  console.log('Background loaded')
  useEffect(() =>{
    if (weather[0].description.includes('дождь')){
      setClip(rainClip)
      console.log('Setted rain')
    }
    if (weather[0].description.includes('пасмурно')){
      setClip(dullClip)
      console.log('Setted dull')
    }
    if (weather[0].description.includes('ясно')){
      setClip(sunnyClip)
      console.log('Setted sun')
    }
  }, [weather])
 
    return(
        <video autoPlay loop muted
        style={{
          height: '100%',
          zIndex: '-1',
          left: '50%',
          transform: 'translate(-50%, 0%)',
          position: 'absolute'
        }}
        >
        <source src={clip} type="video/mp4" />
      </video>
    )
}