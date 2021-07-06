import { useState, useEffect } from 'react';
import './App.css';
import GoogleMap from './GoogleMap';
import SearchbarDropdown from './SearchbarDropdown';

function App() {

  const [suburbs, setSuburbs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationSuburb, setLocationSuburb] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const dataFromServer = await fetchData();
      setSuburbs(dataFromServer.items);
    }
    getData()
  }, []);

  const fetchData = async () => {
    const res = await fetch('https://silver-api.production.leadhome.io/api/suburbs?query=bryan');
    const data = await res.json();
    return data;
  }

  const selectSuburb = (location) => {
    const locationItem = suburbs.filter((suburb) => {
      return suburb.suburb.toLowerCase().includes(location.toLowerCase());
    })
    if (location !== "") {
      setLocationSuburb(locationItem[0]);
    }
  }
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newSuburbsList = suburbs.filter((suburb) => {
        return suburb.suburb.toLowerCase().includes(searchTerm.toLowerCase());
      })
      setSearchResults(newSuburbsList);
    } else {
      setSearchResults(suburbs);
    }
  }

  return (
    <div className="App">
      <div className="header_title"><p>See if we're in your area</p></div>
      <SearchbarDropdown suburbs={searchTerm.length < 1 ? suburbs : searchResults} term={searchTerm} searchKeyword={searchHandler} selectSuburb={selectSuburb} />
      <GoogleMap locationSuburb={locationSuburb} />
    </div>
  );
}

export default App;
