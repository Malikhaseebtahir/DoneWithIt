import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles';

function AppTextInput({ icon, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons style={styles.icon} size={20} name={icon} color={defaultStyles.colors.medium}/> }
            <TextInput style={[styles.textInput, defaultStyles.text]} {...otherProps}/>
        </View>
    );  
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: defaultStyles.colors.light,
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
        flex: 1
    }
});

export default AppTextInput;