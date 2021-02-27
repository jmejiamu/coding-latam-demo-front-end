import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import UpdateData from '../screens/UpdateData';

const Stack = createStackNavigator();

const UpdateStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Update Screen"
                component={UpdateData}
                options={{
                    title: "Update Information",
                    headerStyle: { backgroundColor: '#E8C125' }
                }}
            />
        </Stack.Navigator>
    )
}

export default UpdateStack
