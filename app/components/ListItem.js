import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppText from './AppText';
import colors from '../config/color';

function ListItem({ title, subTitle, image, IconComponent, onPress, renderRightActions }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight 
                underlayColor={colors.light}
                onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image}/>}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

let styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15
    },

    detailsContainer: {
        justifyContent: 'center',
        marginLeft: 10
    },

    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },

    title: {
        color: colors.black,
        fontWeight: '500',
    },

    subTitle: {
        color: colors.medium
    }
});

export default ListItem;