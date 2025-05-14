import NavBar from "../components/Navbar";
import {useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function FilteredSpotRoulette() {
    const [selectedType, setSelectedType] = useState("");
    const [matchMode, setMatchMode] = useState("any");
    const [tags, setTags] = useState([]);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const navigate = useNavigate();

    function handleTypeChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSelectedType(event.target.value);
    }

    function handleTagsChange(event: React.ChangeEvent<HTMLInputElement>) {
        const tag = event.target.id;
        const isChecked = event.target.checked;


        setSelectedTags(prev =>
            isChecked
                ? [...prev, tag]
                : prev.filter(t => t !== tag)
        );
    }

    // function handleSpecificCriteriaChange(event: React.ChangeEvent<HTMLInputElement>) {
    //     setSelectedTagChoice(event.target.value);
    // }
    
    const handleClick = async () => {
        try {
            const queryString = `/api/places/random?type=${selectedType}&tags=${selectedTags.join(",")}&match=${matchMode}`;
            const res = await fetch(queryString);
            if(!res.ok) throw new Error("No place found.")
                else {
            const place = await res.json();
            navigate(`/places/${place.id}`);     };
            
            // navigate(`/places/${place.id}`);
            
        } catch(error) {
            console.error("Error fetching random place:", error);
            alert("No matching places found.");
        }
    };
    
    useEffect(() => {
        fetch(`/api/tags`)
            .then(res => res.json())
            .then(setTags)
            .catch(console.error);
    }, []);

    function tagsList() {

    }
    
    return <div>
        <h1>Filtered Spot Roulette</h1>        
        <NavBar />
        <div>
            <h2>Type</h2>
            <input type="radio" id="bar" name="myType" value="bar" onChange={handleTypeChange}/>
            <label htmlFor="bar">Bar</label>

            <input type="radio" id="restaurant" name="myType" value="restaurant" onChange={handleTypeChange}/>
            <label htmlFor="restaurant">Restaurant</label>

            <input type="radio" id="attraction" name="myType" value="attraction" onChange={handleTypeChange}/>
            <label htmlFor="attraction">Attraction</label>
        </div>
        
        <div>
            <h2>Price</h2>
            <input type="checkbox"></input>
            <label>$</label>

            <input type="checkbox"></input>
            <label>$$</label>
            
            <input type="checkbox"></input>
            <label>$$$</label>

            <input type="checkbox"></input>
            <label>$$$$</label>
        </div>
        <h3>Tags</h3>
        <div className=" h-30 overflow-y-auto">
            <ul>
            {tags.map((tag, index) => (
                <li key={tag || index}>
                    <input type="checkbox" id={tag} name="myTag" checked={selectedTags.includes(tag)} onChange={handleTagsChange}></input>
                    <label htmlFor={tag}>{tag}</label>
                </li>               
            ))}    
            </ul>
        </div>

        <div>
            <h2>Contain all tags or some tags?</h2>
            <div>
            <select onChange={(e) => setMatchMode(e.target.value)}>
                <option value="all">Match All Tags</option>
                 <option value="any">Match Any Tag</option>
            </select>

            </div>
        </div>

        <button onClick={handleClick} disabled={!selectedType}>Pick a Place</button>
        {selectedType && <p>You selected: {selectedType}</p>}
    </div>
}