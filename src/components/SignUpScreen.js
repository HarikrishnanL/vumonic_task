import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView } from 'react-native';

export default class SignUpScreen extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.outerContainer}>
                {/* <View style={styles.outerContainer}> */}
                <Text>Welcome to Vumonic DataLabs SignUp</Text>
                <TextInput
                    placeholder='FirstName'
                    style={styles.TextInputStyle}
                />
                <TextInput
                    placeholder='SecondName'
                    style={styles.TextInputStyle}

                />
                <TextInput
                    placeholder='Email'
                    style={styles.TextInputStyle}

                />

                <TextInput
                    placeholder='Password'
                    style={styles.TextInputStyle}

                />
                <Button
                    title='Submit'
                    style={styles.TextInputStyle}

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
    },
}) 