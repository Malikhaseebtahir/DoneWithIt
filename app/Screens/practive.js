import React from 'react';
import { View, ImageBackground, StyleSheet, Image, Text } from 'react-native';
import AppButton from './../components/AppButton';

function Practive() {
    return(
        <>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <AppButton title='Login' onPress={() => console.log('pressed')}></AppButton>
            </View>
        </>
    )
}

export default Practive;