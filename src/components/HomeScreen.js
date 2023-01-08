import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Footer from './Footer';

const HomeScreen = ({navigation}) => {
  return (
    <>
      <View style={styles.home}>
        <Text style={styles.introText}>
          This is S-P-E-L-L, a place for you to learn(or get better at) how to
          spell
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            title={'One letter'}
            color="#8b5cf6"
            onPress={() => {
              navigation.navigate('OneLetterGame');
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title={'Two letter'}
            color="#7c3aed"
            onPress={() => {
              navigation.navigate('TwoLetterGame');
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title={'6-8 Length word(hard)'}
            color="#6d28d9"
            onPress={() => {}}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title={'Source Code'} color="#ea580c" onPress={() => {}} />
        </View>
        <View />
      </View>
      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '80%',
    color: 'black',
    margin: 10,
  },
  home: {
    backgroundColor: '#075985',
    color: 'white',
    flex: 1,
    alignItems: 'center',
  },
  introText: {
    margin: 20,
    fontSize: 20,
    color: 'white',
  },
});

export default HomeScreen;
