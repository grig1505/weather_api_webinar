import {React, useState} from 'react';
import { Info } from './Info';
import { TextField } from '../TextField';
import { weatherService } from '../../services/weather.seervice';
import './Widget.scss';

export const Widget: React.FC = () => {
  const [weatherData, setWeatherData] = useState<IWeather | null>(null);
  const [cityName, setCityName] = useState("");
  const [error, setError] = useState();
  

  const handleSubmit = async (e: React.FormEvent) =>{
    e.preventDefault();
    if(cityName.trim() === "") return setError("Введите город");
    try{
      const weather = await weatherService.getWeather(cityName);
      setWeatherData(weather);
    }catch (error){
      if(axios.isAxiosError(error)){
        if(error.response?.data.cod === "404") return setError("Город не найден");
      }
    }

  }
// .widget>form.widget-form>.textField+h2.widget-title+img.widget-image+.widget-info+p.widget-description+button.widget-submit
 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setCityName(e.target.value);
  if(error) setError("");
 }
  return (
    <div className="widget">
      <form action="" className="widget-form" onSubmit={handleSubmit}>
       <TextField error={error} onChange={handleChange} value={cityName} name="city" label="Город" type="text" />
        {weatherData && (<>
        <h2 className="widget-title">{weatherData.name}</h2>
        <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`} alt="wether-image" className="widget-image" />
        <Info feels={weatherData
          .main.feels_like} hum={weatherData.main.humidity} temp={weatherData.main.temp}/>
        <p className="widget-description">Описание погоды</p>
        </>) }
        <button  className="widget-submit">Отправить</button>
      </form>
    </div>
  );
};
