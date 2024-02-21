import styles from './modal.module.css';
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';
import { getForecast } from '../../api/api';

const Modal = ({ onClose, onAddTrip }) => {
    const [formData, setFormData] = useState({
        city: '',
        date1: '',
        date2: '',
    });

    const onChangeInput = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const onSubmitForm = async (event) => {
        event.preventDefault();
        try {
            const existingDataString = localStorage.getItem('forecastData');
            let existingData = existingDataString ? JSON.parse(existingDataString) : [];

            const data = await getForecast(formData.city, formData.date1, formData.date2);

            if (!Array.isArray(existingData)) {
                existingData = [];
            }

            existingData.push(data);
            localStorage.setItem('forecastData', JSON.stringify(existingData));

            onClose();
            onAddTrip(data);
        } catch (error) {
            alert(error);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            onClose();
        }
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={styles.backdrop} onClick={handleBackdropClick} onKeyDown={handleKeyDown}>
            <div className={styles.modal}>
                <form className={styles.form} onSubmit={onSubmitForm}>
                    <label htmlFor="city">City</label>
                    <input className={styles.inputmodal} onChange={onChangeInput} value={formData.city} type="text" name="city" id="city" required />

                    <label htmlFor="date1">Start date</label>
                    <input className={styles.inputmodal} onChange={onChangeInput} value={formData.date1} type="text" name="date1" id="date1" required placeholder='YYYY-MM-DD' />

                    <label htmlFor="date2">End date</label>
                    <input className={styles.inputmodal} onChange={onChangeInput} value={formData.date2} type="text" name="date2" id="date2" required placeholder='YYYY-MM-DD' />

                    <button className={styles.btn} type='submit'>Submit</button>
                </form>
                <button className={styles.btnModalClose} onClick={onClose}>
                    <RxCross2 className={styles.icon} />
                </button>
            </div>
        </div>
    );
}

export default Modal;