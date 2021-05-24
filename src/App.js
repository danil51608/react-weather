import React, { useEffect, useState } from 'react';

import './App.css';
import Background from './components/background';
import Info from './components/information'
import axios from 'axios';
function App() {
  const APIkey = 'c8f8361a7502dc25167ac4290075186f'
  const [info, setInfo] = useState({});
  const [weather, setWeather] = useState({})
  const [main, setMain] = useState(undefined);
  const [daysWeather, setDaysWeather] = useState({})
  const [city, setCity] = useState('Москва');
  const optionsNow = {
    method: 'GET',
    url: 'https://api.openweathermap.org/data/2.5/weather?',
    params: {
      q: `${city}`,
      lang: 'ru',
      units: 'metric',
      appid: 'c8f8361a7502dc25167ac4290075186f'
    }
  }; 
  
  const optionsDays = {
    method: 'GET',
    url: 'https://api.openweathermap.org/data/2.5/forecast',
    params: {
    q: `${city}`,
    lang: 'ru',
    units: 'metric',
    appid: 'c8f8361a7502dc25167ac4290075186f'
    }
  };

  useEffect(()=>{
    axios(optionsNow)
    .then(response =>{
      setInfo(response.data)
      setWeather(response.data.weather)
      axios(optionsDays)
      .then(response =>{
        setDaysWeather(response.data.list)
      })
        setMain(response.data.main)

    })
    .catch(error =>{
      if(error.response.status === 429){
        alert('Слишком много запросов для бесплатного API')
      }
    })
    }, [])

    useEffect(()=>{
      axios(optionsNow)
      .then(response =>{
        setInfo(response.data)
        setWeather(response.data.weather)
        axios(optionsDays)
        .then(response =>{
          setDaysWeather(response.data.list)
        })
        setMain(response.data.main)
      })
      }, [city])

      const changeCity = () =>{
        const inputValue = document.getElementById('city').value;
        setCity(inputValue);
      }
    console.log(info)
  return(
    <div className='container'>
      <div className='settingMenu'>
        <input type='text' placeholder='Введите город...' id='city'/>
        <input type='submit' value='set' onClick={()=>{changeCity()}}/>
      </div>
     { info ? <Info info={info} weather={weather} main={main} daysWeather={daysWeather}/> : 'No Data' }
     { weather[0] ? <Background weather={weather} /> : 'Loading'}
    </div>
  )
}

export default App;
