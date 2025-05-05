import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import NavBar from '../components/Navbar';
import { Loader } from "@googlemaps/js-api-loader";

export default function PlaceDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    
    //State and references
    const [place, setPlace] = useState<any>(null);
    const mapRef = useRef<google.maps.Map | null>(null);
    const mapContainerRef = useRef<HTMLDivElement | null>(null);


    //Fetch the place
    useEffect(() => {
        fetch(`/api/places/${id}`)
            .then(res => res.json())
            .then(setPlace)
            .catch(console.error);
    }, [id]);

    //build the map once place loads
    useEffect(() => {
        if(!place || mapRef.current || !mapContainerRef.current) return;

        const loader = new Loader({
            apiKey: import.meta.env.VITE_GOOGLE_API_KEY as string,
            version: "weekly",
            libraries: ["places", "marker"],
        });

        loader.load().then(async () => {
                const position = {
                    lat: place.location.lat,
                    lng: place.location.lng
                };

            mapRef.current = new google.maps.Map(mapContainerRef.current!, {
                center: position,
                zoom: 16,
                mapId: import.meta.env.VITE_GOOGLE_MAP_ID,
            });
            
            //Import marker library and create AndvancedMarker
            const { AdvancedMarkerElement} = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
            
            new AdvancedMarkerElement({ 
                map: mapRef.current!,
                position,
                title: place.name,
            });
        })
        .catch(console.error);      
    }, [place]);
    
    if (!place) return <div>
        <NavBar />
        <p>Loading...</p>
        </div>;
    
    return (
        <div className="mx-auto w-fit">
            <NavBar />
            <h1>{place.name}</h1>
            <p className="font-medium">{place.type}</p>
            <p>{place.description}</p>
            <p>{place.tags?.join(', ')}</p>
            <div ref={mapContainerRef} id="map" className="my-4 h-70 w-full rounded-md shadow" />
            <button onClick={() => navigate('/')}>Home</button>
        </div>
    )

}