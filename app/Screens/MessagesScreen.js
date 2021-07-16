import React from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';

import SafeViewAndroid from "../common/GlobalStyles";
import ListItemSeperator from '../components/ListItemSeperator';
import ListItem from './../components/ListItem';

const messages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 3,
        title: 'T3',
        description: 'D3',
        image: require('../assets/mosh.jpg')
    }
]

function MessagesScreen(props) {
    return(
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={ ({ item }) => 
                    <ListItem 
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log('Item clicked', item)}
                        />
                }
                ItemSeparatorComponent={ListItemSeperator}
            />
        </SafeAreaView>
    );
}

export default MessagesScreen;