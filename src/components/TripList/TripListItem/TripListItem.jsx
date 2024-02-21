import styles from './tripitem.module.css';
import { useState } from 'react';
import WeatherDetails from '../../WeatherDetails/WeatherDetails';


const TripListItem = ({ data }) => {
    const [details, setdDtails] = useState('');
    const [isShowDetails, setShow] = useState(false);
    

    const handleClick = (event, city) => {
        event.preventDefault();
        setdDtails(city)
        setShow(true)
    }

    return (
        <div className={styles.box}>
            {data.map((trip, index) => (
                <li className={styles.item} key={index} id={index} onClick={(e) => handleClick(e, trip.address)}>
                    <img src="https://th.bing.com/th/id/R.2c6bfc64c41fa0288d0399689af865fd?rik=SOc7jXe6ZVc2PQ&pid=ImgRaw&r=0" alt="London"></img>
                    <h3>{trip.address}</h3>
                    <p>{trip.days[0].datetime} - {trip.days[trip.days.length - 1].datetime}</p>
                    {isShowDetails && details === trip.address && <WeatherDetails city={details} />}
                </li>
            ))}  
        </div>
    );
}

export default TripListItem;
// import styles from './tripitem.module.css';

// const TripListItem = ({ data }) => {
//     return (
//         <li className={styles.item}>
//             <img src="https://th.bing.com/th/id/R.2c6bfc64c41fa0288d0399689af865fd?rik=SOc7jXe6ZVc2PQ&pid=ImgRaw&r=0" alt="London"></img>
//             <h3>{data.address}</h3>
//             <p>{data.days[0].datetime} - {data.days[data.days.length - 1].datetime}</p>
//         </li>
//     );
// }

// export default TripListItem;


