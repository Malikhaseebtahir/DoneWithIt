import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/color';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.leftButton}>
                <MaterialCommunityIcons name='close' size={35} color='white'/>
            </View>
            <View style={styles.rightButton}>
                <MaterialCommunityIcons name='trash-can-outline' size={35} color='white'/>
            </View>

            <Image resizeMode="contain" style={styles.image} source={require('../assets/chair.jpg')}/>

        </View>       
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1
    },

    image: {
        width: '100%',
        height: '100%'
    },

    leftButton: {
        position: 'absolute',
        top: 50,
        left: 30,
    },

    rightButton: {
        position: 'absolute',
        top: 50,
        right: 30,
    }
});

export default ViewImageScreen;