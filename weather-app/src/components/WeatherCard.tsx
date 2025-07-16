import WeatherData from "./WeatherData"
import LocationInput from "./LocationInput"
import { useState } from "react"

function WeatherCard() {

    const [city,setCity]=useState<string>('')

  return (
    <div>
        <LocationInput onSearch={(city)=>setCity(city)} />
        <WeatherData city={city}/>
    </div>
  )
}

export default WeatherCard