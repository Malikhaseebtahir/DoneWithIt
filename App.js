import React, { useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import Screen from './app/components/Screen';
import { Button, Image } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [imageUrl, setImageUrl] = useState();

  const requestPermision = async () => {
    const respone = await Permissions.askAsync(Permissions.CAMERA, Permissions.MEDIA_LIBRARY);
    if (!respone.granted) return alert('You need to enable permission to access this gallery');
  }

  useEffect(() => {
    requestPermision();
  })

  selectPhoto = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      console.log(result)
      if (!result.cancelled) setImageUrl(result.uri);
    } catch (error) {
      console.log(error);
    }
  }

  return <Screen>
    <Button title='Select photo' onPress={selectPhoto}/>
    <Image source={{ uri: imageUrl }} style={{ width: 200, height: 200 }}/>
  </Screen>
}
