import React from 'react'

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import InfoStack from './InfoStack';
import UpdateStack from './UpdateStack';

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="page1" component={HomeStack} options={{ title: "Home" }} />
                <Tab.Screen name="page2" component={InfoStack} options={{ title: "Info" }} />
                <Tab.Screen name="page3" component={UpdateStack} options={{ title: "Upadate" }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
