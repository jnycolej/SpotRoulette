import { useState, useEffect } from "react";
import NavBar from '../components/Navbar';
import { Navigation, useNavigate } from "react-router-dom";


export default function SpotList() {
    
    const [places, setPlaces] = useState<any[]>([]);
    const navigate  = useNavigate();

    async  function fetchList() {
        try {
            const res = await fetch("/api/places");
            if (res.ok) {
                const data = await res.json();
                setPlaces(data);
                // console.log(data);  
            } else {
                throw new Error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error: ', error);
        }
    }
    


    useEffect(() => {
        fetchList();
    },[]);
    
    return (
        <div>
            <NavBar />
            <h1>Place List</h1>
            <div className="app-container">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Neighborhood</th>
                            <th>Type</th>
                            {/* <th>Description</th> */}
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {places.map((place, index) => (
                            
                            <tr key={place.id || index}>
                                <button onClick={() => {navigate(`/places/${place.id}`)}}><td>{place.name}</td></button>
                                <td>{Array.isArray(place.neighborhoods) 
                                        ? place.neighborhoods?.join("/") 
                                        : place.neighborhoods || "N/A"}</td>
                                <td>{place.type}</td>
                                {/* <td>{place.description || "Not available yet"}</td> */}
                                <td>{place.address}, {place.state} {place.zipcode}</td>
                            </tr>
                            
                        ))}
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}