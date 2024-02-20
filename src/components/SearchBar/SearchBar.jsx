import styles from './searchBar.module.css';
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';


 const SearchBar = ({ handleClickSubmit }) => {
  const [search, setSearch] = useState('');

  const onChange = (event) => {
    setSearch(event.currentTarget.value);
  }

  const handleClick = (event) => {
    event.preventDefault();

    if (search === '') {
      alert("Please enter words");
      return;
    }

    handleClickSubmit({search});
    setSearch('');
  }

    return (<div className={styles.searchbar}>
      <form onSubmit={handleClick} className={styles.form}>
        <button type="submit" className={styles.button}>
          <CiSearch className={styles.icon} />
          <span className={styles.buttonLabel}>Search</span>
        </button>

        <input
          onChange={onChange}
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search your trips"
        />
      </form>
    </div>
    )
}
  
export default SearchBar;