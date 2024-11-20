import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import firebase from "../firebaseConfig";

export default function Register({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); // Novo stanje za potvrdu lozinke
    const [error, setError] = useState('');

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            setError('Lozinke se ne podudaraju'); // Provjera lozinki
            return;
        }

        try {
            const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
            const user = userCredential.user;
            console.log('Registrirani korisnik:', user.email);
            navigation.navigate('ToDoList'); // Navigacija na ToDo List nakon registracije
        } catch (error) {
            console.error("Greška prilikom registracije: ", error.message);
            setError(error.message); // Postavi grešku
        }
    };

    return (
        <LinearGradient colors={['#ff7e5f', '#feb47b']} style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.title}>Registracija</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Lozinka"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <TextInput
                    style={styles.input}
                    placeholder="Potvrda lozinke"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                />
                {error ? <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text> : null}
                <Button title="Registracija" onPress={handleRegister} />
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#fff',
    },
});
