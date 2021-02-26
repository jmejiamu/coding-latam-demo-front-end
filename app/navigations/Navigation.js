import React from 'react'
import { View, Text } from 'react-native'

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from '../screens/Home';
import UserInfo from '../screens/UserInfo';
import UpdateData from '../screens/UpdateData';

const Tab = createMaterialBottomTabNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Screen name="page1" component={Home} options={{ title: "Home" }} />
            <Tab.Screen name="page1" component={UserInfo} options={{ title: "Info" }} />
            <Tab.Screen name="page2" component={UpdateData} options={{ title: "Upadate" }} />
        </NavigationContainer>
    )
}

export default Navigation
