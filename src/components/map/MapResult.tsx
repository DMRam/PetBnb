import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Dimensions, PermissionsAndroid, Platform, Text } from 'react-native';
import MapView, { Region } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const { width, height } = Dimensions.get('window');

export const MapResult = () => {
  const [initialRegion, setInitialRegion] = useState<Region | null>(null);
  const [locationPermission, setLocationPermission] = useState(false);

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Access Required',
            message: 'This app needs to access your location',
            buttonPositive: 'OK',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setLocationPermission(true);
          getCurrentLocation();
        } else {
          console.log('Location permission denied');
        }
      } else {
        setLocationPermission(true);
        getCurrentLocation();
      }
    };

    const getCurrentLocation = () => {
      Geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setInitialRegion({
            latitude,
            longitude,
            latitudeDelta: 0.005, // More accurate zoom level
            longitudeDelta: 0.005, // More accurate zoom level
          });
        },
        (error) => {
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 } // maximumAge set to 0 to avoid using cached location
      );
    };

    requestLocationPermission();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {initialRegion ? (
        <MapView
          style={styles.map}
          region={initialRegion} // Change initialRegion to region to allow dynamic updates
          showsUserLocation={true}
          showsMyLocationButton={true}
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width,
    height,
  },
});
