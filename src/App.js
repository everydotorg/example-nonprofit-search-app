import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchValue, setSearchValue] = useState("");
  function handleSearchInputChange(event) {
    setSearchValue(event.target.value);
  }
  return (
    <div className="App">
      <form>
      <input placeholder="Search for a nonprofit!" type="search" name="search" value={searchValue} onChange={handleSearchInputChange}/>
      </form>
      <p>{searchValue}</p>
    </div>
  );
}

export default App;
