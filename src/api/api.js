import axios from "axios";


const API_KEY = 'PUHPTNLZADEQK6LFSV6FTHK83';

export const getForecast = async (city, date1, date2) => {
    const { data } = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${date1}/${date2}?unitGroup=metric&include=days&key=${API_KEY}`)
    return data;
}

export const getTodayWeather = async (city) => {
    const { data } = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&include=days&key=${API_KEY}`)
    return data;
}