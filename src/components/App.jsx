import Header from "./Header/Header";
import SearchBar from "./SearchBar/SearchBar";

import { useState } from "react";

export const App = () => {
    const [search, setSearch] = useState({
    search: '',
  });
  

  const handleClickSubmit = ({search})=> {
    setSearch(search)
  } 
  return (
    <div className="App">
      <Header />
      <main className="container">
        <SearchBar handleClickSubmit={handleClickSubmit}/>
      </main>  
     </div> 
  );
};
