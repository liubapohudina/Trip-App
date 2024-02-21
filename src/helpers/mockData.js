
const getRandomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}


const generateRandomTrips = (count) => {
    const trips = [];
    const cities = ['London', 'Paris', 'New York', 'Tokyo', 'Berlin'];

    for (let i = 0; i < count; i++) {
        const startDate = new Date(); 
        const endDate = new Date(startDate.getTime() + Math.random() * (30 * 24 * 60 * 60 * 1000)); 
        //const days = Math.ceil(Math.abs(endDate - startDate) / (24 * 60 * 60 * 1000)); 

        const trip = {
            address: cities[Math.floor(Math.random() * cities.length)],
            days: [
                { datetime: getRandomDate(startDate, endDate).toLocaleDateString() },
                { datetime: getRandomDate(startDate, endDate).toLocaleDateString() },
            ]
        };

        trips.push(trip);
    }

    return trips;
}


export default generateRandomTrips; 
