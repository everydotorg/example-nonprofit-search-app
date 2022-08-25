import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchValue, setSearchValue] = useState("");
  function handleSearchInputChange(event) {
    setSearchValue(event.target.value);
    if (event.target.value === "") {
      setSearchResults([]);
    } else {
      setNewSearch(event.target.value);
    }
  }
  const [searchResults, setSearchResults] = useState([]);
  function setNewSearch(newSearchValue) {
    fetch("https://partners.every.org/v0.2/search/" + newSearchValue + "?apiKey=5a2be079dc5a64d56dfae3786abe4543")
    .then(handleResult)
    .then(handleData);
  }
  function handleResult(result) {
    return result.json();
  }
  function handleData(data) {
    setSearchResults(data.nonprofits);
  }
  function handleNonprofit(searchResult) {
    console.log(searchResult);
    return (
    <li key={searchResult.name}>
      <a href={searchResult.profileUrl + "#donate"}>{searchResult.name}</a>
      <ul>{searchResult.description}</ul>    
    </li>
    );
  }
  return (
    <div className="App">
      <form>
      <input placeholder="Search for a nonprofit!" type="search" name="search" value={searchValue} onChange={handleSearchInputChange}/>
      </form>
      <ul>{searchResults.map(handleNonprofit)}</ul>
    </div>
  );
}

export default App;
