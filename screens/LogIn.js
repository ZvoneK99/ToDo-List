import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import firebase from '../firebaseConfig';//Importanje Firebase

export default function LogIn({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Funkcija za prijavu
    const handleLogin = async () => {
        try {
            const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
            const user = userCredential.user;
            console.log('Prijavljeni korisnik:',user.email);
            navigation.navigate('ToDoList'); //Prelazak na ToDo List nakon prijave
        } catch (error) {
            console.error("Greška prilikom prijave: ",error.message);
        }
    };

    //Funkcija za navigaciju na registraciju
    const handleRegisterNavigation = () => {
        console.log("Navigacija na registraciju.");
        //Navigacija na ekran za registraciju nekad u budućnosti...
    };

    return(
        <LinearGradient
        colors={['#f53733', '#0a0f70']}
        style={styles.background}>
        <View style={styles.container}>
            <Text style={styles.title}>Prijavi se</Text>
            <TextInput
                style={styles.input}
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"/>
            <TextInput
                style={styles.input}
                placeholder='Lozinka'
                value={password}
                onChangeText={setPassword}
                secureTextEntry/>
            <Button title='Prijava' onPress={handleLogin}/>
            <View style={styles.registerContainer}>
                <Text>Nemaš račun?</Text>
                <Button title='Registracija' onPress={handleRegisterNavigation}/>
            </View>
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
    registerContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
});
