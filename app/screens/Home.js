import React from 'react'
import {
    View,
    Text,
    Keyboard,
    TouchableWithoutFeedback,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import { MaterialCommunityIcons, AntDesign, FontAwesome5, MaterialIcons } from '@expo/vector-icons'
import InputComponent from './InputComponent'


const Home = (props) => {
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
                            // style={styles.inputStyle}
                            placeholder="Name"
                            keyboardType="email-address"
                            placeholderTextColor='gray'
                        // value={email}
                        // onChangeText={e => setEmail(e)}
                        />
                    </View>
                    <View style={styles.iconStyles} >

                        <MaterialIcons name="perm-device-information" size={24} color="#1D1B28" />

                        <InputComponent
                            // style={styles.inputStyle}
                            placeholder="Email"
                            secureTextEntry={true}
                            placeholderTextColor='gray'
                        // value={password}
                        // onChangeText={e => setPassword(e)}
                        />

                    </View>
                    <View style={styles.iconStyles} >

                        <MaterialIcons name="perm-device-information" size={24} color="#1D1B28" />

                        <InputComponent
                            // style={styles.inputStyle}
                            placeholder="Phone"
                            secureTextEntry={true}
                            placeholderTextColor='gray'
                        // value={password}
                        // onChangeText={e => setPassword(e)}
                        />

                    </View>

                </View>
                <View style={{ marginLeft: 20, marginRight: 20 }}>

                    <TouchableOpacity style={styles.submitButtonStyle}
                    // onPress={handleSubmit}
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
