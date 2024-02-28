import styles from './tripList.module.css';
import TripListItem from './TripListItem/TripListItem';
import AddTripItem from "./TripListItem/AddTripItem/AddTripItem";
import { useState, useEffect } from "react";
import generateRandomTrips from '../../helpers/mockData';

const TripList = ({ dataSearch }) => {
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    //const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        const storedData = localStorage.getItem('forecastData');
        if (storedData) {
            setData(JSON.parse(storedData));
        } else {
            const generatedData = generateRandomTrips(2);
            localStorage.setItem('forecastData', JSON.stringify(generatedData));
            setData(generatedData);
        }
    }, []); 
    
/*------------------------USE WITH API-----------------------------*/
    // useEffect(() => {
    //     //setIsLoading(true);
    //     // const storedData = localStorage.getItem('forecastData');
    //     // try {
    //     //     if (storedData) {
    //     //         const forecastData = JSON.parse(storedData);
    //     //         setData(prevData => [...prevData, forecastData]);
    //     //     }
    //     // } catch (error) {
    //     //     alert('You don`t have any trips yet!');
    //     //     console.error(error);
    //     // } finally {
    //     //     setIsLoading(false);
    //     // }
    // }, []); 

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
    /*--------------for delete item from list and local storage---------------*/
      const deleteItem = (id) => {
        setData(prevData => {
            const newData = prevData.filter((item, index) => index !== id);
            localStorage.setItem('forecastData', JSON.stringify(newData));
            return newData;
        });
    };
    
    
   return (
    <section>
        {/* {isLoading && <p>Loading...</p>} */}
        {dataSearch && dataSearch.length > 0 ? (
            <ul className={styles.tripList}>
                   <TripListItem data={filterData} deleteItem={deleteItem} />
                <AddTripItem onAddTrip={addTripToList} />
            </ul>
        ) : data ? (
            <ul className={styles.tripList}>
                <TripListItem data={data} deleteItem={deleteItem}/>
                <AddTripItem onAddTrip={addTripToList} />
            </ul>
        ) : (
            <AddTripItem onAddTrip={addTripToList} />
        )}
       </section>
    /*---------------------USE THIS LAYOUT WITH API---------------------*/
    //    <section>
    //         {isLoading && <p>Loading...</p>}
    //         {dataSearch.length ? (
    //             <ul className={styles.tripList}>
    //                 <TripListItem data={filterData} />
    //                 <AddTripItem onAddTrip={addTripToList} />
    //             </ul>
    //         ) : (
    //             data.length > 0 ? (
    //                 <ul className={styles.tripList}>
    //                     {data.map((trip, index) => (
    //                         <TripListItem key={index} index={index} data={trip} />
    //                     ))}
    //                     <AddTripItem onAddTrip={addTripToList} />
    //                 </ul>
    //             ) : (
    //                 <AddTripItem onAddTrip={addTripToList} />
    //             )
    //         )}
    //     </section>
   )
}

export default TripList;

