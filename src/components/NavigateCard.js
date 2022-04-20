import {StyleSheet, Text, Touchable, View,TouchableOpacity} from 'react-native';
import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useDispatch} from 'react-redux';
import {setDestination, setOrigin} from '../redux/slices/navSlice';
import NavFavourites from './NavFavourites';
import {useNavigation} from '@react-navigation/native';
import {Icon} from 'react-native-elements';
const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Text style={{textAlign: 'center', paddingTop: 15, fontSize: 22}}>
        Good morning Suresh
      </Text>
      <View style={{}}>
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where to"
            styles={styles}
            enablePoweredByContainer={false}
            query={{
              key: 'AIzaSyBJzbp7o-m2OKg4h-_q2wjNhGHOqwI7vXM',
              language: 'en',
            }}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  loaction: details.geometry.location,
                  description: data.description,
                }),
              );
            }}
            minLength={2}
            fetchDetails={true}
            returnKeyType={'search'}
            onFail={error => console.error(error)}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
          />
        </View>
        <NavFavourites />
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            paddingTop: 3,
           
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              backgroundColor: 'black',
              width: "24%",
              paddingHorizontal: 4,
              paddingVertical: 3,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: 'black',
              alignItems:'center'
            }}
            onPress={() => navigation.navigate('RideOptionsCard')}>
            <Icon name="car" type="font-awesome" color="white" size={18} />
            <Text style={{color: 'white', textAlign: 'center', fontSize:18,paddingLeft: 10}}>
              Ride
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              backgroundColor: 'black',
              width: "24%",
              paddingHorizontal: 4,
              paddingVertical: 3,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: 'black',
              alignItems:'center'
            }}
            onPress={() => navigation.navigate('RideOptionsCard')}>
            <Icon
              name="fast-food-outline"
              type="ionicon"
              color="white"
              size={18}
            />
           <Text style={{color: 'white', textAlign: 'center', fontSize:18,paddingLeft: 10}}>
              Food
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default NavigateCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: '#DDDDDF',
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
