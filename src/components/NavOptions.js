import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    id: '1224',
    title: 'Get a ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: '4354',
    title: 'Order food',
    image: 'https://links.papareact.com/28w',
    screen: 'EatsScreen',
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const url_a = 'myapp://app/map/tuty';
  console.log('ll', Linking.getInitialURL());
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      horizontal
      renderItem={item => (
        <>
          <TouchableOpacity
            onPress={() => navigation.navigate('MapScreen')}
            style={{
              padding: 2,
              paddingLeft: 6,
              paddingBottom: 8,
              paddingTop: 4,
              backgroundColor: '#f4f0ec',
              margin: 2,
              marginLeft: 20,
              width: 130,
            }}>
            <View>
              <Image
                style={{width: 120, height: 120, resizeMode: 'contain'}}
                source={{uri: item.item.image}}
              />
              <Text style={{marginTop: 2, fontSize: 20, fontWeight: '900'}}>
                {item.item.title}
              </Text>
              <Icon
                style={{
                  padding: 2,
                  backgroundColor: 'black',
                  borderRadius: 20,
                  width: 30,
                  marginTop: 4,
                }}
                name="arrowright"
                color="white"
                type="antdesign"
              />
            </View>
          </TouchableOpacity>
        </>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
