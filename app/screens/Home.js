import React, { useState } from 'react'
import {
    View,
    Text,
    Keyboard,
    TouchableWithoutFeedback,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'
import InputComponent from './InputComponent'


const Home = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [color, setColor] = useState('');

    const handleSubmit = async () => {
        try {
            const body = {
                name: name,
                email: email,
                fav_color: color
            }
            const response = await fetch('http://192.168.1.69:3006/saveinfo', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
        } catch (error) {
            console.error(error.message);
        }

        setName('')
        setEmail('')
        setColor('')
    }


    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>
                <View style={styles.inputStyle}>
                    <View style={styles.logoStyle} >
                        <FontAwesome5 name="user-circle" size={40} color="#1D1B28" />
                    </View>
                    <View style={styles.iconStyles}>
                        <MaterialIcons name="perm-device-information" size={24} color="#1D1B28" />

                        <InputComponent

                            placeholder="Name"
                            placeholderTextColor='gray'
                            value={name}
                            onChangeText={e => setName(e)}
                        />
                    </View>
                    <View style={styles.iconStyles} >

                        <MaterialIcons name="perm-device-information" size={24} color="#1D1B28" />

                        <InputComponent

                            placeholder="Email"
                            keyboardType="email-address"
                            placeholderTextColor='gray'
                            value={email}
                            onChangeText={e => setEmail(e)}
                        />

                    </View>
                    <View style={styles.iconStyles} >

                        <MaterialIcons name="perm-device-information" size={24} color="#1D1B28" />

                        <InputComponent
                            placeholder="Favorite color"
                            placeholderTextColor='gray'
                            value={color}
                            onChangeText={e => setColor(e)}
                        />

                    </View>

                </View>
                <View style={{ marginLeft: 20, marginRight: 20 }}>

                    <TouchableOpacity style={styles.submitButtonStyle}
                        onPress={handleSubmit}
                    >
                        <Text style={styles.textSingStyle} >Submit Information</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.textSingStyle} >Clear fields</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </TouchableWithoutFeedback>
    )
}

export default Home;

const styles = StyleSheet.create({
    contaner: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F8EA8C'
    },
    inputStyle: {
        marginLeft: 20,
        marginRight: 50
    },
    submitButtonStyle: {
        padding: 10,
        backgroundColor: '#E8C125',
        marginBottom: 15
    },
    textSingStyle: {
        color: '#1D1B28',
        textAlign: "center",

    },
    iconStyles: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        marginBottom: 60
    },
    logoStyle: {
        color: 'white',
        textAlign: "center",
        fontSize: 30,
        alignItems: "center",
        marginBottom: 60,
        marginTop: 80
    }
})
