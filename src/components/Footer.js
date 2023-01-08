import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>
        by <Text style={{color: '#f97316'}}>Spookyorange</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'black',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});

export default Footer;
