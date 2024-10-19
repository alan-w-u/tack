import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/LoginPage.png')}
        style={styles.loginImage}
        resizeMode="contain"
      />
      <View style={styles.buttonContainer}>
        <Image
          source={require('../assets/images/google.png')}
          style={styles.buttonImage}
          resizeMode="contain"
        />
        <Image
          source={require('../assets/images/github.png')}
          style={styles.buttonImage}
          resizeMode="contain"
        />
        <Image
          source={require('../assets/images/twitter.png')}
          style={styles.buttonImage}
          resizeMode="contain"
        />
        <Image
          source={require('../assets/images/facebook.png')}
          style={styles.buttonImage}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loginImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: '25%',
    right: '10%', 
    width: '100%',
    alignItems: 'flex-end',
  },
  buttonImage: {
    width: '80%', // Adjusted width for the sign-in buttons
    height: 50,
    marginBottom: 10, // Added margin to separate the buttons
  },
});