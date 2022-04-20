import React, {useState, useEffect} from 'react';
import {
  Alert,
  Animated,
  InteractionManager,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const useFadeIn = (duration = 10000) => {
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.spring(opacity, {
      toValue: 1,
      friction: 1,
    }).start();
  }, []);
  // console.log(opacity, 'opac');
  return opacity;
};

const Ball = ({onShown}) => {
  const opacity = useFadeIn();

  // Running a method after the animation
  useEffect(() => {
    // onShown();
    const interactionPromise = InteractionManager.runAfterInteractions(() =>
      onShown(),
    );
    return () => interactionPromise.cancel();
  }, []);

  return (
    <Animated.Image
      style={{width: 227, height: 200, transform: [{scale: useFadeIn()}]}}
      source={{
        uri: 'https://naukrirecruiter.naukri.com/profilePic/getpic?pid=1603445244rp2583640_medium4',
      }}
    />
  );
};

const animation = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Ball
        onShown={() => (
          Alert.alert('Animation is done'), navigation.navigate('HomeScreen')
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  ball: {
    width: 100,
    height: 100,
    backgroundColor: 'salmon',
    borderRadius: 100,
  },
});

export default animation;
