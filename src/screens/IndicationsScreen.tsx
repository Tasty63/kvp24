import React, { useContext, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, Button, View } from 'react-native';
import { observer } from 'mobx-react-lite';

const HomeScreen = observer(() => {
  return (
    <SafeAreaProvider style={styles.container}>
      <Text style={styles.text}>Показания</Text>
      <View>
        <View style={styles.info}></View>
        <View style={styles.info}></View>
        <View style={styles.info}></View>
      </View>
    </SafeAreaProvider>
  );
});

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  text: {
    fontSize: 32,
    textAlign: 'center',
    marginVertical: 20,
  },
  info: {
    fontSize: 24,
    padding: 10,
  },
  button: {
    marginVertical: 20,
  },
});

export default HomeScreen;
