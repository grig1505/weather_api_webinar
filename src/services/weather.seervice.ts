import axios from "axios";
import type { IWeather } from "../model/weather";

//https://openweathermap.org/current#geocoding
//
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";//?q={city name}&appid={API key}
export const weatherService = {
    async getWeather(cityName:string): Promise<IWeather> {
        const { data } = await axios.get(BASE_URL, {
            params: {
                q: cityName,
                appid: import.meta.env.VITE_API_KEY,
                units: "metric",
                lang: "ru",
            },
        });

        return data;
    },
}