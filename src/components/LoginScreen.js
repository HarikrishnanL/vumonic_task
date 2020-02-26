import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.outerContainer} >
                {/* <View > */}
                    <Text>Welcome To Vumonic DataLabs</Text>
                    <TextInput
                        style={styles.TextInputStyle}
                        placeholder='UserName'
                    />
                    <TextInput
                        style={styles.TextInputStyle}
                        placeholder='Password'
                    />

                    <Button title='Login' onPress={() => this.props.navigation.navigate('Post')} />

                    <View style={styles.signUpContainer}>
                        <Text> Create New Account </Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                            <Text style={styles.TextSignUpStyle}> SignUp</Text>
                        </TouchableOpacity>
                    </View>

                {/* </View> */}
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    TextInputStyle: {
        marginVertical: 20,
        borderBottomWidth: 0.5,
        borderColor: '#c7cbd1',
    },

    signUpContainer: {
        flexDirection: 'row',
        marginVertical: 10,
    },

    TextSignUpStyle: {
        color: 'grey'
    }


})
