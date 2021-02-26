import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home screen"
                component={Home}
                options={{ title: "Home Screen" }}
            />
        </Stack.Navigator>
    )
}

export default HomeStack
