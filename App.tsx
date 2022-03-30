import React, { createContext, useEffect } from 'react';
import { useAuthStore } from './src/store/AuthStore';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from './src/screens/AuthScreen';
import { observer } from 'mobx-react-lite';
import { decode, encode } from 'base-64';
import UserInfoStore from './src/store/UserInfoStore';
import HomeTabs from './src/screens/HomeTabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

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
    <SafeAreaProvider>
      <Context.Provider value={{ userInfoStore }}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={screenOptions}>
            {isAuth ? (
              <Stack.Screen name="HomeTabs" component={HomeTabs} />
            ) : (
              <Stack.Screen name="Auth" component={AuthScreen} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </Context.Provider>
    </SafeAreaProvider>
  );
});

export default App;
