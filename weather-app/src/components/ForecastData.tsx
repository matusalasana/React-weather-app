import { Box, Badge, Button, Card, HStack, Image, Text, SimpleGrid } from "@chakra-ui/react";
import useForecastWeather from "./hooks/useForecastWeather";

interface Props{
    forecastCity:string;
}

function ForecastData({forecastCity}:Props) {
  const { data, isLoading, error } = useForecastWeather(forecastCity);
  const getDayName = (dateString: string) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[new Date(dateString).getDay()];
  };

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading forecast</Text>;

  return (
    <Box bgColor={'yellow.500'} display={'flex'} overflowY={'hidden'} scrollbar={'hidden'} overflowX={'scroll'} height={'370px'} columns={2}>
            {data?.forecast.forecastday.slice(0,7).map(day=>
    <Box placeItems={'center'}>
      <Text textAlign={'center'}>{getDayName(day.date)}</Text>
        <Box 
                width={'200px'} 
                bgColor={data ?'blue.400' : 'normal'} 
                height={'180px'} 
                mt={5} 
                rounded={10} 
              >
                <HStack 
                  justifyContent={'center'} 
                  alignItems={'center'} 
                >
                  <Image 
                    width={"80px"} 
                    src={data?.current.condition.icon} 
                    alt={data?.current.condition.text}
                  />
                  <Text 
                    color={'white'} 
                    fontSize={'3xl'} 
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
                    fontWeight={'400'} 
                    fontFamily={'sans-serif'} 
                    fontSize={'2xl'}
                  >
                    {data?.location.name}
                  </Text>
                  <Text 
                    color={'white'}  
                    fontSize={'md'}
                  >
                    {data?.current.condition.text}
                  </Text>
                </HStack>
              </Box>
                
              <Box 
                display={'flex'} 
                justifyContent={'space-evenly'} 
                width={'180px'} 
                mx={5} 
                rounded={10}
              >
                <HStack 
                  display={'flex'} 
                  flexDirection={'column'} 
                  alignItems={'center'}
                >
                  <Text 
                    fontSize={'sm'}
                  >
                    {data && "Max. Temp."}
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
    )}

    </Box>
  );
}

export default ForecastData;
