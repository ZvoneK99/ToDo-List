import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from './screens/LogIn';
import Register from './screens/Register';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LogIn">
                <Stack.Screen name="LogIn" component={LogIn} options={{ title: 'Prijava' }} />
                <Stack.Screen name="Register" component={Register} options={{ title: 'Registracija' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
