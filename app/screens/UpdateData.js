import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'

const UpdateData = () => {
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

                            <View style={styles.buttonSideBySide}>

                                <View style={{ marginLeft: 20, marginRight: 20 }}>

                                    <TouchableOpacity style={styles.buttonStyle}
                                        onPress={() => deleteData(item.id)}
                                    >
                                        <Text style={styles.textUserStyle} >Delete</Text>
                                    </TouchableOpacity>

                                </View>
                                <View style={{ marginLeft: 20, marginRight: 20 }}>

                                    <TouchableOpacity style={styles.buttonStyle}
                                        onPress={() => deleteData(item.id)}
                                    >
                                        <Text style={styles.textUserStyle} >Update</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>

                        </View>
                    </View>
                )
            }}
        />
    )
}

export default UpdateData

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
    buttonStyle: {
        padding: 10,
        marginBottom: 15,
        borderColor: '#1D1B28',
        borderWidth: 1,
        marginTop: 10,
    },
    buttonSideBySide: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly"
    }
})
