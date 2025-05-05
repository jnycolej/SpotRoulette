import { useState, useEffect } from "react";
import NavBar from '../components/Navbar';

export default function SpotList() {
    
    const [places, setPlaces] = useState<any[]>([]);
    
    function getNeighborhood(zipcode: string) {
        switch(zipcode) {
             
        }
    }
    async  function fetchList() {
        try {
            const res = await fetch("/api/places");
            if (res.ok) {
                const data = await res.json();
                setPlaces(data);
                console.log(data);  
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
                            <th>Type</th>
                            <th>Description</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {places.map((place, index) => (
                            <tr key={place.id || index}>
                                <td>{place.name}</td>
                                <td>{place.type}</td>
                                <td>{place.description || "Not available yet"}</td>
                                <td>{place.address}, {place.state}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}