import React, { useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';

import SafeViewAndroid from "../common/GlobalStyles";
import ListItemSeperator from '../components/ListItemSeperator';
import ListItem from './../components/ListItem';
import ListItemActionDelete from './../components/ListItemDeleteAction';

const initialMessages = [
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
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        console.log('called');
        const newMessages = messages.filter(m => m.id !== message.id);
        setMessages(newMessages);
    }

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
                        onPress={() => console.log()}
                        renderRightActions={() => 
                            <ListItemActionDelete 
                                onPress={() => handleDelete(item)}/>}
                        />
                }
                ItemSeparatorComponent={ListItemSeperator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 3,
                            title: 'T3',
                            description: 'D3',
                            image: require('../assets/mosh.jpg')
                        }
                    ])
                }}
            />
        </SafeAreaView>
    );
}

export default MessagesScreen;