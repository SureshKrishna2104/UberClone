import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {useDispatch} from 'react-redux';

const data = [
  {
    id: '3423',
    icon: 'home',
    location: 'Home',
    destination: 'Code street, London, UK',
  },
  {
    id: '36567',
    icon: 'briefcase',
    location: 'Work',
    destination: 'Londone Eye, London, UK',
  },
];

const NavFavourites = () => {
  const handlePress = () => {};

  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <TouchableOpacity
          style={{flexDirection: 'row',  marginTop:25}}
          onPress={handlePress}>
          <Icon
            style={{height:50,width:50,borderRadius: 50/2,backgroundColor: '#DCDCDC', padding: 3,marginLeft:30,justifyContent:'center'}}
            name={item.icon}
            type="feather"
            color="white"
            size={25}
          />
          <View style={{marginLeft:12}}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>
              {item.location}
            </Text>
            <Text style={{color: 'gray'}}>{item.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
