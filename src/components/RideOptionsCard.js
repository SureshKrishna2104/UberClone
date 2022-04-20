import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Icon} from 'react-native-elements';
import {FlatList} from 'react-native-gesture-handler';
const data = [
  {
    id: 'Uber-X-123',
    title: 'Uber X',
    multiplier: 1,
    image: 'https://links.papareact.com/3pn',
  },
  {
    id: 'Uber-XL-456',
    title: 'Uber XL',
    multiplier: 1.2,
    image: 'https://links.papareact.com/5w8',
  },
  {
    id: 'Uber-LUX-123',
    title: 'Uber LUX',
    multiplier: 1.75,
    image: 'https://links.papareact.com/7pf',
  },
];
const RideOptionsCard = () => {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 3,
        }}>
        <TouchableOpacity
          style={{left: 10, position: 'absolute', zIndex: 100}}
          onPress={() => navigation.navigate('NavigateCard')}>
          <Icon
            type="antdesign"
            name="arrowleft"
            color="black"
            size={23}
            //style={}
          />
        </TouchableOpacity>
        <Text style={{textAlign: 'center', paddingTop: 15, fontSize: 22}}>
          Select a Ride
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity>
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
              }}
              source={{uri: item.image}}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
