import React from 'react';
import { TextInput, View, StyleSheet, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/color';

function AppTextInput({ icon, ...otherProps }) {
    console.log(otherProps);
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons style={styles.icon} size={20} name={icon} color={colors.medium}/> }
            <TextInput style={styles.textInput} {...otherProps}/>
        </View>
    );  
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.light,
        borderRadius: 25,
        padding: 8,
        marginVertical: 10
    },

    icon: {
        marginVertical: 3,
        marginRight: 10,
        marginLeft: 3
    },

    textInput: {
        flex: 1,
        color: colors.dark,
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
    }
});

export default AppTextInput;