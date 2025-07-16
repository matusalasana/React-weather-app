import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface WeatherResponse {
  location: {
    name: string;
    country: string;
  };
  current: {
    temp_c: number;
    feelslike_c: number;
    condition: {
      text: string;
      icon: string;
    };
    humidity: number;
    wind_kph: number;
  };
  forecast: {
    forecastday: {
      date: string;
      day: {
        avgtemp_c: number;
        maxtemp_c: number;
        mintemp_c: number;
        condition: {
          text: string;
          icon: string;
        };
      };
    }[];
  };
}

function useForecastWeather(city:string){

    return useQuery<WeatherResponse>({
        queryKey: ['forecast',city],
        queryFn: () =>
            axios
                .get('http://api.weatherapi.com/v1/forecast.json', {
                    params: {
                        q: city,
                        key: "b1d14534d3a34518a8c120723251607",
                        alerts:"no",
                        days:7,
                        
                    }
                
                })
                .then(response => response.data),
                enabled:!!city
                

    })
}

export default useForecastWeather