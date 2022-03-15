import React, { useContext } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, Button } from 'react-native';
import { useAuthStore } from '../store/store';
import { observer } from 'mobx-react-lite';

const HomeScreen = observer(() => {
  const { logout } = useAuthStore();

  return (
    <SafeAreaProvider style={styles.container}>
      <Text style={styles.text}>Hello</Text>
      <Button title="Выйти" onPress={logout} />
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
});

export default HomeScreen;
