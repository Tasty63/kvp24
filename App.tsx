import { StatusBar } from 'expo-status-bar';
import React, { createContext, FC } from 'react';
import { authStoreContext, useAuthStore } from './src/store/store';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from './src/screens/AuthScreen';
import HomeScreen from './src/screens/HomeScreen';
import { observer } from 'mobx-react-lite';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

const App = observer(() => {
  const { isAuth } = useAuthStore();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        {isAuth ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <>
            <Stack.Screen name="Auth" component={AuthScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default App;
