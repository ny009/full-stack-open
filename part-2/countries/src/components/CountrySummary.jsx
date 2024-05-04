import { useEffect, useState } from "react"
import axios from 'axios'

const CountrySummary = ({country}) => {
  const APIKey = import.meta.env.VITE_SOME_KEY
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${APIKey}`
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    axios.get(weatherUrl)
    .then(res => 
      setWeather({
        temp: (res.data.main.temp-273.15).toFixed(2), 
        wind: res.data.wind.speed,
        icon: `https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`
      })
    )
  }, [])
  return (
      <div key={country.name}>
        <h1>{country.name}</h1>
        <div>capital {country.capital}</div>
        <div>area {country.area}</div>
        <h4>languages:</h4>
        <ul>
          {Object.keys(country.languages).map((code) => (
            <li key={code}>{country.languages[code]}</li>
            )
          )}
        </ul>
        <img src={country.flag.img} alt={country.flag.alt}/>
        {weather ? (
          <>
            <h2>Weather in {country.capital}</h2>
            <div> temperature {weather.temp} Celcius </div>
            <div> <img src={weather.icon} alt="Weather Icone goes here..."/></div>
            <div> wind {weather.wind} m/s</div>
          </>
        ): ''}

      </div>
  )
}

export default CountrySummary