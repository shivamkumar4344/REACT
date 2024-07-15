import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp()
{
    const [weatherInfo ,setWeatherInfo] = useState(
        {
            city: "Patna",
            feelsLike: 42.96,
            humidity: 71,
            temp: 35.96,
            tempMax: 35.96,
            tempMin: 35.96,
            weather: "haze",
        }
    )

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>

        </div>
    )
}