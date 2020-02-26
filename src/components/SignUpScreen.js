import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView } from 'react-native';
import Firebase from '../../constant/firebaseconfig';

export default class SignUpScreen extends Component {

    constructor(props) {
        super(props)
    }

    firstNameHandler=(firstName)=>{
       this.props.OnRenderFirstName(firstName)
    }

    secondNameHandler = (secondName) => {
        this.props.onRenderSecondName(secondName)
    }

    emailHandler = (email) => {
        this.props.OnRenderEmail(email)
    }

    passwordHandler= (password) => {
       this.props.OnRenderPassword(password)
    }

    submitHandler = () => {
        console.log("submitted the signUpdata");
        console.log(this.props.SignUpInfo);
        Firebase.database().ref('profile').update({
            Email:this.props.SignUpInfo.email,
            lastName:this.props.SignUpInfo.lastName,
            userName:this.props.SignUpInfo.userName,
            password:this.props.SignUpInfo.password
        })
         this.props.navigation.navigate('Login')
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.outerContainer}>
                {/* <View style={styles.outerContainer}> */}
                <Text>Welcome to Vumonic DataLabs SignUp</Text>

                <TextInput
                    placeholder='FirstName'
                    style={styles.TextInputStyle}
                    onChangeText={this.firstNameHandler}
                />

                <TextInput
                    placeholder='SecondName'
                    style={styles.TextInputStyle}
                    onChangeText={this.secondNameHandler}
                />

                <TextInput
                    placeholder='Email'
                    style={styles.TextInputStyle}
                    onChangeText={this.emailHandler}

                />

                <TextInput
                    secureTextEntry={true}
                    placeholder='Password'
                    style={styles.TextInputStyle}
                    onChangeText={this.passwordHandler}

                />
                <Button
                    title='Submit'
                    style={styles.TextInputStyle}
                    onPress={()=>this.submitHandler()}

                />

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
        width:'80%'
    },
}) 