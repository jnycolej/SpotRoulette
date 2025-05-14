import { useNavigate } from "react-router-dom";

export default function NavBar() {

    const navigate = useNavigate();
    const handleClick = async (page: string) => {
        const res = await fetch('/api/places');
        const places = await res.json();
        if(page === "/") {
            navigate(`/`);
        } else if( page === "/places") {
            navigate(`/places`);
        }
     }
    return (
        <div>
            <div className="flex">
                <button onClick={() => handleClick("/")}>Home</button>
                <button onClick={() => handleClick("/places")}>SpotsList</button>
                <button onClick={() => handleClick("/FilteredSpotRoulette")}>Filtered Roulette</button>                
            </div>
        </div>
    )
}