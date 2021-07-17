import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { View, StyleSheet } from 'react-native';

function Icon({ 
    name, 
    size = 40, 
    backgroundColor = '#000', 
    iconColor = '#fff' 
}) {
    return (
        <View style={{ 
            width: size, 
            height: size, 
            borderRadius: size/2,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor
        }}>
            <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5}/>
        </View>
    );
}

export default Icon;