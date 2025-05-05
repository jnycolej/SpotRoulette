import { useLocalSearchParams } from "expo-router";
import {View, Text } from 'react-native';
import { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";

export default function PlaceDetailsScreen() {
    const [place, setPlace] = useState<any>(null);
    const {id} = useLocalSearchParams();
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        const fetchPlace = async () => {
          try {
            const res = await fetch('http://192.168.1.83:3001/places/' + id);
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            const data = await res.json();
            setPlace(data);
          } catch (err: any) {
            console.error('Failed to fetch place:', err);
            setError(err.message || 'Something went wrong.');
          }
        };
      
        fetchPlace();
      }, [id]);
      


    return (
        <View>
            <Text>Details for place ID: {id}</Text>
            { error ? (
                <Text style={{color: 'red'}}>Error: {error}</Text>
            ) : !place ? (
                <Text>Loading place info...</Text>
            ) : (
                <>
                    <Text>Name: {place.name}</Text>
                    <Text>Description: {place.description}</Text>
                    <Text>Type: {place.type}</Text>
                    <MapView
                        style={{flex: 1}}
                        initialRegion={{
                            latitude: place.location.lat,
                            longitude: place.location.lng,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01
                        }}
                    >
                        <Marker coordinate={{latitude: place.location.lat, longitude: place.location.lng}} />
                    </MapView>
                </>
            )}
        </View>
    );
}