import React, { useContext, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, Button, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuthStore } from '../store/AuthStore';
import { observer } from 'mobx-react-lite';
import UserInfoStore from '../store/UserInfoStore';
import { Context } from '../../App';
import UserService from '../services/UserService';

const HomeScreen = observer(() => {
  const { logout } = useAuthStore();
  const { userInfoStore } = useContext(Context);

  useEffect(() => {
    userInfoStore.getInfo();
  }, []);

  return (
    <SafeAreaProvider style={styles.container}>
      <View>
        <View style={styles.info}>
          <Text>Лицевой счёт:</Text>
          <Text>{userInfoStore.userInfo.contractNumber}</Text>
        </View>
        <View style={styles.info}>
          <Text>Адрес</Text>
          <Text>{userInfoStore.userInfo.address}</Text>
        </View>
        <View style={styles.info}>
          <Text>Управляющая организация</Text>
          <Text>{userInfoStore.userInfo.companyName}</Text>
        </View>
      </View>
      <Text style={styles.text}>Hello</Text>
      <View style={styles.button}>
        <Button title="Выйти" onPress={logout} />
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
