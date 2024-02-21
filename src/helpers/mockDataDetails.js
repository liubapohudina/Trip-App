const generateMockWeatherData = () => {
    return {
        days: [
            {
                datetime: "2024-02-25",
                icon: "rain",
                tempmax: "10°C",
                tempmin: "5°C"
            },
            {
                datetime: "2024-02-26",
                icon: "cloudy",
                tempmax: "12°C",
                tempmin: "7°C"
            },
            {
                datetime: "2024-02-27",
                icon: "sunny",
                tempmax: "15°C",
                tempmin: "8°C"
            }
        ]
    };
};

export default generateMockWeatherData;