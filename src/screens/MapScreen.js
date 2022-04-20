import {StyleSheet, Text, View, Linking} from 'react-native';
import React, {useState, useEffect} from 'react';
import Map from '../components/Map';
import MapNavigator from '../navigation/MapNavigator';
import {useNavigation} from '@react-navigation/native';
import MapView, {Marker} from 'react-native-maps';


const MapScreen = () => {
  return (
    <View>
      <View style={{height: '50%'}}>
        <MapView
          style={{
            height: '100%',
            width: 400,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
          //mapType="mutedStandard"
          initialRegion={{
            latitude: 11.006606549574345, //orgin.location.lat
            longitude: 76.94568759735093, //orgin.location.lng
            latitudeDelta: 0.005, //0.005
            longitudeDelta: 0.005, //0.005
          }}>
          <Marker
            coordinate={{
              latitude: 11.006606549574345, //orgin.location.lat
              longitude: 76.94568759735093, //orgin.location.lng
            }}
            title="Origin"
            description="Codingamart"
            identifier="origin"
          />
        </MapView>
      </View>
      <View style={{height: '50%'}}>
        <MapNavigator />
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
