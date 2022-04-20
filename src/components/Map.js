import {StyleSheet, Text, View, Linking, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';

const data = [
  {
    id: 1,
    latitude: 11.006606549574345,
    longitude: 76.94568759735093,
    name: 'Codingmart',
  },
  {
    id: 2,
    latitude: 8.765749498774266,
    longitude: 78.13880449958279,
    name: 'Tuticorin',
  },
  {
    id: 3,
    latitude: 12.960539338547656,
    longitude: 77.59243659278867,
    name: 'Banglore',
  },
];
const Map = () => {
  const [loading, setLoading] = useState(true);
  const [place, setPlace] = useState();

  useEffect(() => {
    Linking.getInitialURL().then(url => {
      navigateHandler(url);
    });
  }, []);

  const navigateHandler = url => {
    if (url) {
      const route = url.replace(/.*\/\//g, '');

      const id = route.match(/\/([^\/]+)\/?$/)[1];
      const post = data.find(item => item.name === id);
      setPlace(post);
      setLoading(false);
    }
  };

  return (
    <View>
      {loading ? (
        <ActivityIndicator size={20} color={'blue'} />
      ) : (
        <MapView
          style={{
            height: '100%',
            width: 400,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
          //mapType="mutedStandard"
          initialRegion={{
            latitude: place.latitude, //orgin.location.lat
            longitude: place.longitude, //orgin.location.lng
            latitudeDelta: 0.005, //0.005
            longitudeDelta: 0.005, //0.005
          }}>
          <Marker
            coordinate={{
              latitude: place.latitude, //orgin.location.lat
              longitude: place.longitude, //orgin.location.lng
            }}
            title="Origin"
            description={place.name}
            identifier="origin"
          />
        </MapView>
      )}
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({});
