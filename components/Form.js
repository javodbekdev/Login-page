import React from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity, StatusBar } from 'react-native'

const Form = ({ title }) => {
    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.form}>
                <Text style={styles.text}>{ title }</Text>
                <TextInput style={styles.email} placeholder="Your Email" />
                <TextInput style={styles.password} secureTextEntry={true} placeholder="Your Password" />
                <TouchableOpacity style={styles.forgotBtn}>
                    <Text style={styles.forgotText}>Forgot password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.login}>
                    <Text style={styles.logintext}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sing}>
                    <Text style={styles.singtext}>Sing In</Text>
                </TouchableOpacity>    
            </View>
        </View>
    )
}

export default Form

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#04405a',
        paddingTop: 130
    },
    form: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    text: {
        fontSize: 37,
        fontWeight: '700',
        color: '#ed6068',
        textAlign: 'center',
        paddingTop: 20

    },
    email: {
        width: 350,
        height: 50,
        backgroundColor: '#475981',
        borderRadius: 50,
        paddingLeft: 10,
        top: 40,
        fontSize: 15
    },
    password: {
        width: 350,
        height: 50,
        backgroundColor: '#475981',
        borderRadius: 50,
        paddingLeft: 10,
        top: 60,
        fontSize: 15
    },
    forgotBtn: {
        width: 350,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        top: 60
    },
    forgotText: {
        color: '#fff',
        fontSize: 15,
    },
    login: {
        width: 350,
        height: 50,
        backgroundColor: '#ed6068',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        top: 80
    },
    logintext: {
        fontSize: 16,
        fontWeight: '700',
        color: '#fff'
    },
    sing: {
        width: 350,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        top: 90
    },
    singtext: {
        fontSize: 16,
        fontWeight: '700',
        color: '#fff'
    }
})
