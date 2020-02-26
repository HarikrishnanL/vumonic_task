import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Firebase from '../../constant/firebaseconfig';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props)
    }

    loginUserNameHandler = (UserName) => {
        this.props.OnrenderLoginUserName(UserName);
    }

    loginpasswordHandler = (password) => {
        this.props.OnrenderLoginPassword(password)
    }

    loginSubmitHandler = () => {

        console.log(this.props.LoginInfo);
        Firebase.database().ref('profile').once('value', (snapshot) => {
            console.log(snapshot.val())
            if (this.props.LoginInfo.loginUserName == snapshot.val().userName && this.props.LoginInfo.loginPassword == snapshot.val().password) {
                this.props.navigation.navigate('Post')

            }
        })
    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.outerContainer} >
                {/* <View > */}
                <Text>Welcome To Vumonic DataLabs</Text>
                <TextInput
                    style={styles.TextInputStyle}
                    placeholder='UserName'
                    onChangeText={this.loginUserNameHandler}
                />
                <TextInput
                    style={styles.TextInputStyle}
                    placeholder='Password'
                    onChangeText={this.loginpasswordHandler}
                />

                <Button title='Login' onPress={() => this.loginSubmitHandler()} />

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
        width: '80%'
    },

    signUpContainer: {
        flexDirection: 'row',
        marginVertical: 10,
    },

    TextSignUpStyle: {
        color: 'grey'
    }


})
