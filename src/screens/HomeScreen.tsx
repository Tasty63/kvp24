import React, { useContext } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, Button, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuthStore } from '../store/AuthStore';
import { observer } from 'mobx-react-lite';
import UserInfoStore from '../store/UserInfoStore';

// лицевой счет,
// наименование управляющей компании,
// отображение адреса жилого помещения

const HomeScreen = observer(() => {
  const { logout } = useAuthStore();

  return (
    <SafeAreaProvider style={styles.container}>
      <View>
        <Text></Text>
        <Text></Text>
        <Text></Text>
      </View>
      <Text style={styles.text}>Hello</Text>
      <View style={styles.button}>
        <Button title="Выйти" onPress={logout} />
      </View>
      <View style={styles.button}></View>
      <Button title="Информация" onPress={UserInfoStore.getInfo} />
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
  button: {
    marginVertical: 20,
  },
});

export default HomeScreen;
