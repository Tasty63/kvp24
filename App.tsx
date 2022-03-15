import { StatusBar } from 'expo-status-bar';
import React, { createContext } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthForm from './src/components/AuthForm';
import store from './src/store/store';
import { StyleSheet } from 'react-native';

export const Context = createContext({ store });

const App = () => {
  return (
    <Context.Provider value={{ store }}>
      <SafeAreaProvider style={styles.container}>
        <AuthForm />
      </SafeAreaProvider>
    </Context.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
});

export default App;
