import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useRouter} from 'expo-router';

export default function HomeScreen() {
    const router = useRouter();
    const handlePress = () => {
        router.push('/random')
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Spot Roulette</Text>
            <Text style={styles.subtitle}>Let's help you pick your next spot.</Text>

            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Let's Go</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fefefe',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: '#666',
        marginBottom: 40,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#007aff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
});