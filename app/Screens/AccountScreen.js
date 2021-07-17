import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ListItem from '../components/ListItem';
import colors from '../config/color';
import Screen from './../components/Screen';
import Icon from './../components/Icon';
import ListItemSeperator from './../components/ListItemSeperator';

const menuItems = [
    {
        title: 'My Listings',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary
        }
    },
    {
        title: 'My Messages',
        icon: {
            name: 'email',
            backgroundColor: colors.secondary
        }
    }
]

function AccountScreen() {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    image={require('../assets/mosh.jpg')}
                    title='Mosh Hamedani'
                    subTitle='malikhaseeb1935@gmail.com'
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeperator}
                    renderItem={({ item }) =>
                        <ListItem 
                            title={item.title}
                            IconComponent={
                                <Icon 
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}/>}
                        />
                    }
                />
            </View>

            <View style={styles.container}>
                <ListItem title='Logout' IconComponent={<Icon name='logout' backgroundColor='#ffe66d'/>}/>
            </View>

        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        backgroundColor: colors.white
    },

    screen: {
        backgroundColor: colors.light
    }
});

export default AccountScreen;