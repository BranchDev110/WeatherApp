import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_API;

export const fetchWeather = async(city) => {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${city}&APPID=${API_KEY}`);
    console.log(API_KEY);
    return res.data;
}
