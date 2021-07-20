import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import Screen from './../components/Screen';
import AppTextInput from './../components/AppTextInput';
import AppButton from './../components/AppButton';
import AppText from './../components/AppText';

let validationSchema = yup.object().shape({
    email: yup.string().email().required().label('Email'),
    password: yup.string().min(5).required().label('Password')
});

function LoginScreen(props) {

    return(
        <Screen>
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={() => console.log('Submit')}
                    validationSchema={validationSchema}>

                    {({ handleChange, handleSubmit, errors }) => (
                        <>
                            <AppTextInput 
                                autoCorrect={false}
                                autoCapitalize="none"
                                icon='email' 
                                keyboardType='email-address'
                                onChangeText={handleChange('email')} 
                                placeholder='Email'
                                textContentType='emailAddress'/>
                            { errors.email && <AppText style={{ color: 'red' }}>{errors.email}</AppText>}
                            <AppTextInput 
                                autoCapitalize="none"
                                autoCorrect={false}
                                icon='lock' 
                                placeholder='Password' 
                                secureTextEntry
                                onChangeText={handleChange('password')}
                                keyboardType='visible-password'
                                textContentType='password' />
                            { errors.password && <AppText style={{ color: 'red' }}>{errors.password}</AppText>}
                            <AppButton title='Login' onPress={handleSubmit}/>
                        </>
                    )}
                </Formik>
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