import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
} from 'react-native';
import React from 'react';
import NavOptions from '../components/NavOptions';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import {setDestination,setOrigin} from '../redux/slices/navSlice'
import NavFavourites from '../components/NavFavourites';

const HomeScreen = () => {
  const dispatch=useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'red'} />
      <View style={{padding: 15}}>
        <Image
          source={{uri: 'https://links.papareact.com/gzs'}}
          style={styles.logo}
        />
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                loaction: details.geometry.location,
                description: data.description,
              }),
            );
            dispatch(setDestination(null));
          }}
          minLength={2}
          fetchDetails={true}
          returnKeyType={'search'}
          onFail={error => console.error(error)}
          query={{
            key: 'AIzaSyBJzbp7o-m2OKg4h-_q2wjNhGHOqwI7vXM',
            language: 'en',
          }}
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 15,
            },
          }}
          enablePoweredByContainer={false}
        />

        <NavOptions />
        <NavFavourites/>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  logo: {
    height: 50,
    width: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});
