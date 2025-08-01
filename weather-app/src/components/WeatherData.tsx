import { Box, HStack, Image, Text } from "@chakra-ui/react";
import useCurrentWeather from "./hooks/useCurrentWeather";
import CurrentSkeleton from "./CurrentSkeleton";

interface Props{
  city:string;
}

function WeatherData({city}:Props) {
    const {data,isLoading,error}=useCurrentWeather(city)

    if (isLoading) return <CurrentSkeleton/>
    if (error?.message=='Request failed with status code 400') 
      return <Text 
                color={'red'}
              >
                There no country or a city with that name, try to search a different way. (eg. zip code, long. lat. ... etc) 
              </Text>

  return (

    <Box 
      display={'flex'} 
      flexDirection={'column'} 
      justifyContent={'center'} 
      alignItems={'center'}
    >
      <Box 
        width={'350px'} 
        bgColor={data ?'blue.400' : 'normal'} 
        height={'230px'} 
        mt={5} 
        rounded={10} 
      >
        <HStack 
          justifyContent={'center'} 
          alignItems={'center'} 
        >
          <Image 
            width={"100px"} 
            src={data?.current.condition.icon} 
            alt={data?.current.condition.text}
          />
          <Text 
            color={'white'} 
            fontSize={'4xl'} 
            fontWeight={'bold'}
          >
            {data && data?.current.temp_c+"°C" }
          </Text>
        </HStack>

        <HStack 
          display={'flex'} 
          flexDirection={'column'} 
          justifyContent={'center'}
        >
          <Text 
            color={'white'} 
            fontWeight={'600'} 
            fontFamily={'sans-serif'} 
            fontSize={'3xl'}
          >
            {data?.location.name}
          </Text>
          <Text 
            color={'white'}  
            fontSize={'xl'}
            textAlign={'center'}
          >
            {data?.current.condition.text}
          </Text>
        </HStack>
      </Box>
        
      <Box 
        display={'flex'} 
        justifyContent={'space-evenly'} 
        width={'350px'} 
        height={'100px'} 
        m={5} 
        rounded={10}
      >
        <HStack 
          display={'flex'} 
          flexDirection={'column'} 
          alignItems={'center'}
        >
          <Text 
            fontSize={'md'}
          >
            {data && "Humidity"}
          </Text>
          <Text 
            fontSize={'md'} 
            fontWeight={'bold'}
          >
            {data && data?.current.humidity+"%"}
          </Text>
        </HStack>
        <HStack 
          display={'flex'} 
          flexDirection={'column'} 
          alignItems={'center'}
        >
          <Text 
            fontSize={'md'}
          >
            {data && "Wind"}
          </Text>
          <Text 
            fontSize={'md'} 
            fontWeight={'bold'}
          >
            {data && data?.current.wind_kph+"km/h"}
          </Text>
          </HStack>
          <HStack
            display={'flex'} 
            flexDirection={'column'} 
            alignItems={'center'}
          >
          <Text 
            fontSize={'md'}
          >
            {data && "Feels like"}
          </Text>
          <Text 
            fontSize={'md'} 
            fontWeight={'bold'}
          >
            {data && data?.current.feelslike_c+"°C"}
          </Text>
        </HStack>
      </Box>

        

    </Box>
  )
}

export default WeatherData