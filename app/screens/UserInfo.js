import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { View, Text } from 'react-native'

const UserInfo = () => {
    const [userData, setUserData] = useState([]);

    const getUserData = async () => {
        const response = await fetch('http://192.168.1.69:3006/userinfo');
        const data = await response.json()
        console.log(data);
        setUserData(data);
    }

    useEffect(() => {
        getUserData();
    }, [])

    return (
        <View>
            {
                userData.map((item, index) => {
                    return (
                        <View key={index}>
                            <Text>{item.name}</Text>
                            <Text>{item.fav_color}</Text>
                            <Text>{item.email}</Text>
                        </View>
                    )
                })
            }
            <Text>User data</Text>
        </View>
    )
}

export default UserInfo
