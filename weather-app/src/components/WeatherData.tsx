import { Box, Spinner, Text } from "@chakra-ui/react";
import useWeatherData from "./hooks/useWeatherData";

interface Props{
  city:string;
}

function WeatherData({city}:Props) {
    const {data,isLoading,error}=useWeatherData(city)

    if (isLoading) return <Spinner/>
    if (error?.message=='Request failed with status code 400') return <Text color={'red'}>There no country or a city with that name. Please try to include a country. (eg. Nairobi, Kenya) </Text>

  return (
    <Box>
    <div>
      <h1>data I can use</h1>
      <ul>
        <li>1. <img src={data?.current.condition.icon} alt={data?.location.name}/> </li>
        <li>2. {data?.current.condition.text} </li>
        <li>3. {data?.current.humidity} </li>
        <li>4. {data?.current.temp_c} </li>
        <li>5. {data?.current.wind_kph} </li>

        <li>{data?.location.country} </li>
        <li>{data?.location.name} </li>
        
      </ul>
        
    </div>

    </Box>
  )
}

export default WeatherData