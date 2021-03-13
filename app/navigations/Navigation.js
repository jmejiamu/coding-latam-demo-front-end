import React from 'react'

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import InfoStack from './InfoStack';
import UpdateStack from './UpdateStack';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="page1" component={HomeStack} options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    )
                }} />
                <Tab.Screen name="page2" component={InfoStack} options={{
                    title: "Info",
                    tabBarIcon: ({ color, size }) => (

                        <AntDesign name="infocirlce" color={color} size={size} />
                    )

                }} />
                <Tab.Screen name="page3" component={UpdateStack} options={{ title: "Upadate" }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
