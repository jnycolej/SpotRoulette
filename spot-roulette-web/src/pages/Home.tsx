import { useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar";

export default function Home() {
    const navigate = useNavigate();

    const handleClick = async () => {
        const res = await fetch('/api/places/random');
        const place = await res.json();
        navigate(`/places/${place.id}`);
    };
    
    return (
        <div>
            <h1>SpotRoulette</h1>
            <NavBar />
            <button onClick={handleClick}>Pick a Place</button>
            <button onClick={() => {navigate(`/places/FilteredSpotRoulette`)}}>Get a Little More Specific</button>            
        </div>

    );
}