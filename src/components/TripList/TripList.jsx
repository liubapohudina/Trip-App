import styles from './tripList.module.css';
import TripListItem from './TripListItem/TripListItem';
import AddTripItem from "./TripListItem/AddTripItem/AddTripItem";
import { useState, useEffect } from "react";

const TripList = ({ dataSearch }) => {
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    console.log(dataSearch.length)

    useEffect(() => {
        setIsLoading(true);
        const storedData = localStorage.getItem('forecastData');
        try {
            if (storedData) {
                const forecastData = JSON.parse(storedData);
                setData(prevData => [...prevData, forecastData]);
            }
        } catch (error) {
            alert('You don`t have any trips yet!');
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }, [isLoading]); 

    useEffect(() => {
        if (dataSearch) {
            // const filteredData = data.flat().filter(trip => trip.address && dataSearch && trip.address.toLowerCase().includes(dataSearch.toLowerCase()));
            const filteredData = data.flat().filter(trip => trip.address && dataSearch && typeof dataSearch === 'string' && trip.address.toLowerCase().includes(dataSearch.toLowerCase()));

            setFilterData(filteredData);
        }
    }, [dataSearch, data]);

    const addTripToList = (newTrip) => {
        setData(prevData => [...prevData, newTrip]);
    };
    
    return (
        <section>
            {isLoading && <p>Loading...</p>}
            {dataSearch.length ? (
                <ul className={styles.tripList}>
                    <TripListItem data={filterData} />
                    <AddTripItem onAddTrip={addTripToList} />
                </ul>
            ) : (
                data.length > 0 ? (
                    <ul className={styles.tripList}>
                        {data.map((trip, index) => (
                            <TripListItem key={index} index={index} data={trip} />
                        ))}
                        <AddTripItem onAddTrip={addTripToList} />
                    </ul>
                ) : (
                    <AddTripItem onAddTrip={addTripToList} />
                )
            )}
        </section>
    );
}

export default TripList;

