import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from './screens/LogIn'; // Povezujemo LogIn.js

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LogIn">
                {/* Ekran za prijavu */}
                <Stack.Screen
                    name="LogIn"
                    component={LogIn}
                    options={{ title: 'ToDo List' }}
                />
                {/* Kasnije ćemo dodati ToDo ekran i registraciju ovdje */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

