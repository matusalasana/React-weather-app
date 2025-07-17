import WeatherData from "./WeatherData"
import LocationInput from "./LocationInput"
import { useState } from "react"
import ForecastData from "./ForecastData"
import { Box } from "@chakra-ui/react"

function WeatherCard() {

    const [city,setCity]=useState<string>('Dubai')

  return (
    <Box p={5}>
        <LocationInput onSearch={(city)=>setCity(city)} />
        <WeatherData city={city}/>
        <ForecastData forecastCity={city} />
    </Box>
  )
}

export default WeatherCard