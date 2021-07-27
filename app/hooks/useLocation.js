import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export default useLocation = () => {
    const [location, setLocation] = useState(null);

    const getLocation = async () => {
        try {
            let { granted } = await Location.requestForegroundPermissionsAsync();
            if (!granted) return;
            
            let {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync({});
            setLocation({ latitude, longitude });
        } catch (error) {
            console.log(error);            
        }
    }
  
    useEffect(() => {
      getLocation();
    }, []);

    return location;
};