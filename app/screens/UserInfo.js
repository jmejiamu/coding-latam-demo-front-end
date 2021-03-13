import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

const UserInfo = () => {
    const [userData, setUserData] = useState([]);

    const getUserData = async () => {
        try {
            const response = await fetch('http://192.168.1.69:3006/userinfo');
            const data = await response.json()
            setUserData(data);

        } catch (error) {
            console.error(error.message);
        }

        getUserData();

    }

    useEffect(() => {
        getUserData();
    }, [])

    return (
        <FlatList
            data={userData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
                return (

                    <View style={{ flex: 1 }} >
                        <View style={styles.card}>
                            <Text>Name:{item.name}</Text>
                            <Text>{item.email}</Text>
                            <Text>{item.fav_color}</Text>
                        </View>
                    </View>
                )
            }}
        />

    )
}

export default UserInfo

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        margin: 10,
        padding: 20,
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
})
