import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import * as yup from 'yup';

import Screen from './../components/Screen';
import { AppForm, AppSubmitButton, AppFormField } from './../components/forms';

let validationSchema = yup.object().shape({
    email: yup.string().email().required().label('Email'),
    password: yup.string().min(5).required().label('Password')
});

function LoginScreen(props) {

    return(
        <Screen>
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
                <AppForm
                    initialValues={{ email: '', password: '' }}
                    onSubmit={() => console.log('Submit')}
                    validationSchema={validationSchema}>
                    <AppFormField 
                        autoCorrect={false}
                        autoCapitalize="none"
                        icon='email'
                        name='email'
                        keyboardType='email-address'
                        placeholder='Email'
                        textContentType='emailAddress'/>
                    <AppFormField 
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon='lock'
                        name='password' 
                        placeholder='Password' 
                        secureTextEntry
                        keyboardType='visible-password'
                        textContentType='password' />
                    <AppSubmitButton title='Login'/>
                </AppForm>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    
    credientialsDetails: {
        paddingVertical: 20,
        paddingHorizontal: 10
    },

    logo: {
        height: 100,
        width:100,
        marginTop: 45,
        marginBottom: 25,
        alignSelf: 'center'
    }
});

export default LoginScreen;