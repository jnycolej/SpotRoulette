import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function RandomScreen() {
    const [place, setPlace] = useState<any>(null);
    const router = useRouter();

    const handlePress = () => {
        router.push(`/api/${place.id}`);
    };
    
    const fetchRandomPlace = async () => {
        const res = await fetch('http://192.168.1.83:3001/api/random');
        const data = await res.json();
        setPlace(data);
    };


    return (
        <View style={screenStyles.container}>
            <Text style={screenStyles.title}>SpotRoulette</Text>
            <Button title="Pick a Place!" onPress={fetchRandomPlace}/>

            { place && (
                <TouchableOpacity style={screenStyles.button} onPress={handlePress}>
                <View style={screenStyles.result}>
                    <Text style={screenStyles.name}>{place.name}</Text>
                    <Text>{place.description}</Text>
                </View>
                </TouchableOpacity>

            )}
        </View>
    );
}

const screenStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },
    result: {
        marginTop: 30
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    button : {

    }
});