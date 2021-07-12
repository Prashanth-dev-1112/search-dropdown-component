import { useState } from 'react';
import './App.css';
import GoogleMap from './GoogleMap';
import SearchbarDropdown from './SearchbarDropdown';

function App() {

  const [suburbs, setSuburbs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationSuburb, setLocationSuburb] = useState([]);

  const searchHandler = async (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== '') {
      const res = await fetch(`https://silver-api.production.leadhome.io/api/suburbs?query=${searchTerm}`);
      const data = await res.json();
      setSuburbs(data.items);
    }
  }

  const selectSuburb = (location) => {
    setSearchTerm(location);
  }

  const selectedSuburb = (location) => {
    if (location !== "") {
      const locationItem = suburbs.filter((suburb) => {
        return suburb.suburb.toLowerCase().includes(location.toLowerCase());
      })
      setLocationSuburb(locationItem[0]);
    }
  }

  return (
    <div className="App">
      <div className="header_title"><p>See if we're in your area</p></div>
      <SearchbarDropdown suburbs={suburbs} term={searchTerm} searchKeyword={searchHandler} selectSuburb={selectSuburb} selectedSuburb={selectedSuburb} />
      <GoogleMap locationSuburb={locationSuburb} />
    </div>
  );
}

export default App;
