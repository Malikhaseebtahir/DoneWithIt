import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.leftButton}/>
            <View style={styles.rightButton}/>

            <Image resizeMode="contain" style={styles.image} source={require('../assets/chair.jpg')}/>

        </View>       
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1
    },

    image: {
        width: '100%',
        height: '100%'
    },

    leftButton: {
        backgroundColor: 'red',
        position: 'absolute',
        top: 50,
        left: 30,
        width: 50, 
        height:50, 
    },

    rightButton: {
        backgroundColor: 'white',
        position: 'absolute',
        top: 50,
        right: 30,
        width: 50, 
        height:50, 
    }
});

export default ViewImageScreen;