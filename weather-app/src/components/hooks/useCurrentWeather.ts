import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface WeatherResponse{
    location: {
    name: string;
    country: string;
      };
  current: {
    temp_c: number;
    feelslike_c:number;
    condition: {
      text: string;
      icon: string;
    };
    humidity: number;
    wind_kph: number;
  };
}

function useCurrentWeather(city:string){

    return useQuery<WeatherResponse>({
        queryKey: ['current',city],
        queryFn: () =>
            axios
                .get('https://api.weatherapi.com/v1/current.json', {
                    params: {
                        q: city,
                        key: "b1d14534d3a34518a8c120723251607"
                    }
                
                })
                .then(response => response.data),
                enabled: !!city
                

    })
}

export default useCurrentWeather