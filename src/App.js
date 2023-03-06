import axios from "axios";
import { useState } from "react";

function App() {
  const [location, setLocation] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  async function getLocation() {
    const response = await axios.get(`https://explore-new-cities.netlify.app/netlify/functions/location?searchQuery=${searchQuery}`);
    setLocation(response.data);
  }

  function handleSearch(event) {
    setSearchQuery(event.target.value);
  }

  return (
    <div className="App">
      {location.display_name && (
        <p>
          {location.display_name} is at lat and lon: {location.lat} / {location.lon}
        </p>
      )}
      <input id="searchQuery" onChange={handleSearch} placeholder="Search for a city" />
      <button onClick={getLocation}>Explore!</button>
    </div>
  );
}

export default App;