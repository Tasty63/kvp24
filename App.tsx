import { StatusBar } from 'expo-status-bar';
import React, { createContext, FC, useEffect } from 'react';
import { authStoreContext, useAuthStore } from './src/store/AuthStore';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from './src/screens/AuthScreen';
import HomeScreen from './src/screens/HomeScreen';
import { observer } from 'mobx-react-lite';
import { decode, encode } from 'base-64';
import UserInfoStore from './src/store/UserInfoStore';
import IndicationsScreen from './src/screens/IndicationsScreen';

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

const Stack = createNativeStackNavigator();
export const userInfoStore = new UserInfoStore();
export const Context = createContext({ userInfoStore });

const screenOptions = {
  headerShown: false,
};

const App = observer(() => {
  const { isAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <Context.Provider value={{ userInfoStore }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          {isAuth ? (
            <Stack.Screen name="Home" component={HomeScreen} />
          ) : (
            <>
              <Stack.Screen name="Auth" component={AuthScreen} />
              <Stack.Screen name="Indications" component={IndicationsScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
});

export default App;
