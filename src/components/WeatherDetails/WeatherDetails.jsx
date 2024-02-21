//import { getTodayWeather } from "../../api/api";
import { useEffect, useState, useRef } from "react";
import styles from './weatherdetails.module.css';
import generateMockWeatherData from "../../helpers/mockDataDetails";

const WeatherDetails = ({ city }) => {
    const [weather, setWeatherData] = useState(null);
    const weatherRef = useRef(null);
    const [loading, setLoading] = useState(false);


    const handleClickOutside = (event) => {
        if (weatherRef.current && !weatherRef.current.contains(event.target)) {
            setWeatherData(null); 
        }
    };


    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
 /*-------------------------USE FOR API-------------------*/
                //const data = await getTodayWeather(city);
                const data = generateMockWeatherData();
                setWeatherData(data);
            } catch (error) {
                alert(`${error}`);
            } finally {
                setLoading(false)
            }
        };
        fetchData();
    }, [city]);

    if (loading) {
        return <p>...Loading</p>;
    }
    
     if (!weather) {
        return;
    }
   

    const daysWeather = weather.days;
    const lengthResponse = daysWeather.length;
    const dayInfo = daysWeather[0];
    console.log(dayInfo)

    return (
        <>
            {lengthResponse > 0 ? (
                <div ref={weatherRef} className={styles.details}>
                    <h3>Today</h3>
                    <p>{dayInfo.datetime}</p>
                    <img src="https://static.vecteezy.com/system/resources/previews/000/450/651/original/rain-vector-icon.jpg" width='74' height='74' alt={dayInfo.icon} />
                    <p>{dayInfo.tempmax}/{dayInfo.tempmin}</p>
                </div>
            ) : (
                <p>No weather data available</p>
            )}
        </>
    );
}

export default WeatherDetails;
