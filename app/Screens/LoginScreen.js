import React, { useState } from 'react';
import { Image, View, StyleSheet } from 'react-native';

import Screen from './../components/Screen';
import AppTextInput from './../components/AppTextInput';
import AppButton from './../components/AppButton';

function LoginScreen(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <Screen>
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
                <AppTextInput 
                    autoCorrect={false}
                    autoCapitalize="none"
                    icon='email' 
                    keyboardType='email-address'
                    onChangeText={text => setEmail(text)} 
                    placeholder='Email'
                    textContentType='emailAddress'/>
                <AppTextInput 
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon='lock' 
                    placeholder='Password' 
                    secureTextEntry
                    onChangeText={text => setPassword(text)}
                    keyboardType='visible-password'
                    textContentType='password' />
                <AppButton title='Login' onPress={() => console.log(email, password)}/>
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