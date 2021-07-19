import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles';
import Screen from './Screen';
import AppText from './AppText';
import PickerItem from './PickerItem';

function AppPicker({ icon, items, selectedItem, placeHolder, onSelectedItem }) {
    const [isModalVisable, setIsModalVisible] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setIsModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons style={styles.icon} size={20} name={icon} color={defaultStyles.colors.medium}/> }
                    <AppText style={[styles.textInput, defaultStyles.text]}>{selectedItem ? selectedItem.label : placeHolder}</AppText>
                    <MaterialCommunityIcons name='chevron-down' size={20} color={defaultStyles.colors.medium}/>
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={isModalVisable} animationType='slide'>
                <Screen>
                    <Button title='close' onPress={() => setIsModalVisible(false)}/>
                </Screen>
                <FlatList
                    data={items}
                    keyExtractor={item => item.value.toString()}
                    renderItem={({ item }) => 
                        <PickerItem label={item.label} onPress={() => {
                            setIsModalVisible(false);
                            onSelectedItem(item)
                        }}/>
                    }
                />
            </Modal>
        </>
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

export default AppPicker;