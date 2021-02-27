import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import UserInfo from '../screens/UserInfo';

const Stack = createStackNavigator();

const InfoStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Info Screen"
                component={UserInfo}
                options={{
                    title: "User Info",
                    headerStyle: { backgroundColor: '#E8C125' }
                }}
            />
        </Stack.Navigator>
    )
}

export default InfoStack;
