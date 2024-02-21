import styles from './addTripItem.module.css';
import Modal from 'components/Modal/Modal';
import { useState } from 'react';

const AddTripItem = ({ onAddTrip }) => {
    const [isShowModal, setIsShowModal] = useState(false);

    const openModal = () => {
        setIsShowModal(true);
    }

    return (
        
        <li>
            <button className={styles.boxAdd} onClick={openModal} type="button">
                <h3>Add trip</h3>
                <span>+</span>
            </button>
            {isShowModal && <Modal onAddTrip={onAddTrip} onClose={() => setIsShowModal(false)} />}
        </li>
    );
}

export default AddTripItem;