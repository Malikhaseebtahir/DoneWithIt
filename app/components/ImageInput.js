import React, { useEffect } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import colors from '../config/colors';

function ImageInput({ imageUri, onChangeImage }) {
    useEffect(() => {
        getPermission();
    }, []);

    const getPermission = async () => {
        const { granted } = await Permissions.askAsync(Permissions.CAMERA, Permissions.MEDIA_LIBRARY);
        if (!granted) return alert('You need to allow access to media');
    }

    const handleChange = () => {
        if (!imageUri) selectImage();
        else Alert.alert('Warning', 'Are you sure you want to delete this photo', [
            { text: 'Yes', onPress: () => onChangeImage(null) },
            { text: 'No' }
        ])
    }

    const selectImage = async () => {
        try {
            const response = await ImagePicker.launchImageLibraryAsync({
                mediaType: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5
            });
            if (!response.cancelled) onChangeImage(response.uri);
        } catch (error) {
            console.log(error);            
        }
    }

    return (
        <TouchableWithoutFeedback onPress={handleChange}>
            <View style={styles.container}>
                {
                    !imageUri && (
                    <MaterialCommunityIcons color={colors.medium} name='camera' size={40}/>
                )}
                {
                    imageUri && <Image source={{ uri: imageUri }} style={styles.image}/>
                }
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.light,
        borderRadius: 15,
        height: 100,
        width: 100,
        overflow: 'hidden',
        justifyContent: 'center'
    },

    image: {
        width: '100%',
        height: '100%'
    }
});

export default ImageInput;