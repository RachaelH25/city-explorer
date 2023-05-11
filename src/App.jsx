import axios from "axios";
import "./App.css";
import { useState } from "react";
// import axios from "axios"

function App() {
    const [location, setLocation] = useState({});
    const [searchQuery, setSearchQuery] = useState("");
    // const [mapImg, setMapImg] = useState("");

    function handleChange(event) {
        console.log(event.target.value);
        setSearchQuery(event.target.value);
    }

    async function getLocation() {
        const API = `https://eu1.locationiq.com/v1/search?key=${process.env.REACT_API_ACCESS_KEY}&q=${searchQuery}&format=json`;
        const res = await axios.get(API);
        setLocation(res.data[0]);
    }

    return (
        <div className="App">
            <input type="text" onChange={handleChange} placeholder="enter location" />
            <button type="submit" onClick={getLocation}>
                Explore!
            </button>
        </div>
    );
}

export default App;
