import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Constants from 'expo-constants'

console.log(Constants);
function Screen({style, children}) {
    return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Constants.statusBarHeight
    }
});

export default Screen;
