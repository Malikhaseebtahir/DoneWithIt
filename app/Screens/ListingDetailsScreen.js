import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import AppText from './../components/AppText';
import colors from '../config/color';
import ListItem from './../components/ListItem';

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/jacket.jpg')}/>
            <View style={styles.detailsComponent}>
                <AppText style={styles.title}>red jacket for sale</AppText>
                <AppText style={styles.price}>$100</AppText>
                <View style={styles.userContainer}>
                    <ListItem 
                        title='Malik Haseeb' 
                        subTitle='5 Listing' 
                        image={require('../assets/mosh.jpg')}/>            
                </View>
            </View>
        </View>
    );
}

let styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },

    detailsComponent: {
        padding: 20
    },

    title: {
        fontSize: 24,
        fontWeight: '500'
    },

    price: {
        color: colors.secondary,
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10
    },

    userContainer: {
        marginVertical: 30
    }
});

export default ListingDetailsScreen;