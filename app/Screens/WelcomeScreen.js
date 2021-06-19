import React from 'react';
import { View, ImageBackground, StyleSheet, Image, Text } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            style={styles.backgound} 
            source={require('../assets/background.jpg')}>

            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
                <Text>Sell what you don't need</Text>
            </View>

            <View style={styles.loginButton}/>
            <View style={styles.signupButton}/>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgound: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    logoContainer: {
        position: 'absolute',
        alignItems: 'center',
        top: 70
    },

    logo: {
        width: 100,
        height: 100,
        marginBottom: 10
    },

    loginButton: {
        backgroundColor: 'red',
        width: '100%',
        height: 70
    },

    signupButton: {
        backgroundColor: 'blue',
        width: '100%',
        height: 70
    }
});

export default WelcomeScreen;