import React, { createContext, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from './src/screens/AuthScreen';
import { observer } from 'mobx-react-lite';
import { decode, encode } from 'base-64';
import HomeTabs from './src/screens/HomeTabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Context, rootStore } from './src/store/RootStore';
import EulaScreen from './src/screens/EulaScreen';

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

const App = observer(() => {
  const { authStore, userInfoStore } = useContext(Context);
  const { isAuth, checkAuth } = authStore;
  const { isEulaAccepted } = userInfoStore.userInfo;

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <SafeAreaProvider>
      <Context.Provider value={rootStore}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={screenOptions}>
            {isAuth ? (
              isEulaAccepted ? (
                <Stack.Screen name="HomeTabs" component={HomeTabs} />
              ) : (
                <Stack.Screen name="Eula" component={EulaScreen} />
              )
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
