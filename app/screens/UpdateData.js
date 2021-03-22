import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Modal, Pressable } from 'react-native'

const UpdateData = () => {
    const [userData, setUserData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

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

    const deleteData = async (id) => {
        try {
            const deleteInfo = await fetch(`http://192.168.1.69:3006/deleteinfo/${id}`, {
                method: 'DELETE'
            })
            getUserData(userData.filter(user => user.id !== id));
            const dataResponse = await deleteInfo.json();
        } catch (error) {
            console.error(error.message);
        }
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
                        <View style={styles.centeredView}>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => {
                                    Alert.alert("Modal has been closed.");
                                    setModalVisible(!modalVisible);
                                }}
                            >
                                <View style={styles.centeredView}>
                                    <View style={styles.modalView}>
                                        <Text style={styles.modalText}>Hello World!</Text>
                                        <Pressable
                                            style={[styles.button, styles.buttonClose]}
                                            onPress={() => setModalVisible(!modalVisible)}
                                        >
                                            <Text style={styles.textStyle}>Hide Modal</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </Modal>

                        </View>
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
                                        onPress={() => setModalVisible(true)}
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
    },
    // modal
    enteredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})
