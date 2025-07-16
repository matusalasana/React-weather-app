import WeatherData from "./WeatherData"
import LocationInput from "./LocationInput"
import { useState } from "react"
import ForecastData from "./ForecastData"

function WeatherCard() {

    const [city,setCity]=useState<string>('Dubai')

  return (
    <div>
        <LocationInput onSearch={(city)=>setCity(city)} />
        <WeatherData city={city}/>
        <ForecastData forecastCity={city} />
    </div>
  )
}

export default WeatherCard