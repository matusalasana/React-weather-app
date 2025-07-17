import { Box,Image, Text } from "@chakra-ui/react";
import useForecastWeather from "./hooks/useForecastWeather";
import ForecastSkeleton from "./ForecastSkeleton";

interface Props{
    forecastCity:string;
}

function ForecastData({forecastCity}:Props) {
  const { data, isLoading, error } = useForecastWeather(forecastCity);
  const getDayName = (dateString: string) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[new Date(dateString).getDay()];
  };

  if (isLoading) return  <ForecastSkeleton/>
  if (error) return null

  return (
    <Box 
      display={'flex'} 
      overflowY={'hidden'} 
      scrollbar={'hidden'} 
      overflowX={'scroll'} 
      height={'180px'}
    >
      {data?.forecast.forecastday.slice(0,7).map(day=>
        <Box 
          width={'200px'} 
          bgColor={data ?'blue.400' : 'normal'} 
          height={'100%'} 
          mx={3} 
          rounded={10} 
        >

          <Box 
            display={'flex'}
            justifyContent={'center'} 
            alignItems={'center'} 
          >
            <Image
              width={"50px"} 
              src={day.day.condition.icon} 
              alt={day.day.condition.text}
            />
            <Text 
              color={'white'} 
              fontSize={'xl'} 
              fontWeight={'bold'}
              ml={1}
            >
              {getDayName(day.date)}
            </Text>
          </Box>
        
          <Box 
            display={'flex'} 
            flexDirection={'column'} 
            width={'180px'} 
            rounded={10}
          > 
            <Box
              display={'flex'}
              justifyContent={'space-evenly'}
              mt={3}
            >
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <Text
                  fontSize={'md'}
                  color={'white'}
                >
                  max-temp
                </Text>
                <Text
                  fontSize={'md'}
                  fontWeight={'bold'}
                  color={'white'}
                >
                  {day.day.maxtemp_c+"°C"}
                </Text>
              </Box>
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <Text
                  fontSize={'md'}
                  color={'white'}
                >
                  min-temp
                </Text>
                <Text
                  color={'white'}
                  fontSize={'md'}
                  fontWeight={'bold'}
                >
                  {day.day.mintemp_c+"°C"}
                </Text>
              </Box>
            </Box>
            <Text m={5} color={'white'} textAlign={'center'}>{day.day.condition.text}</Text>
          </Box>

        </Box>
                
      )}

    </Box>
  );
}

export default ForecastData;
