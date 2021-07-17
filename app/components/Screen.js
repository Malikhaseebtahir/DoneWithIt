import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants'

console.log(Constants);
function Screen({children}) {
    return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight
    }
});

export default Screen;
