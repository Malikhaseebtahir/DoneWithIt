import React from 'react';
import { View, ImageBackground, StyleSheet, Image, Text } from 'react-native';
import AppButton from './../components/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            blurRadius={5}
            style={styles.backgound} 
            source={require('../assets/background.jpg')}>

            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
                <Text style={styles.tagLine}>Sell what you don't need</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <AppButton title='Login' onPress={() => console.log('pressed')}/>
                <AppButton 
                    title='Register'
                    color='secondary'
                    onPress={() => console.log('pressed')}/>
            </View>
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
    },

    buttonsContainer: {
        padding: 20,
        width: '100%'
    },

    tagLine: {
        fontSize: 25,
        fontWeight: '600',
        paddingVertical: 20
    }
});

export default WelcomeScreen;