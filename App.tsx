import { StatusBar } from 'expo-status-bar';
import React, { createContext } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthForm from './src/components/AuthForm';
import store from './src/store/store';

export const Context = createContext({ store });

const App = () => {
  return (
    <Context.Provider value={{ store }}>
      <SafeAreaProvider>
        <AuthForm />
      </SafeAreaProvider>
    </Context.Provider>
  );
};

export default App;
