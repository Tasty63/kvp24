import React, { useContext, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, Button, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuthStore } from '../store/AuthStore';
import { observer } from 'mobx-react-lite';
import UserInfoStore from '../store/UserInfoStore';
import { Context } from '../../App';

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
          <Text>Имя УК:</Text>
          <Text>{userInfoStore.userInfo.companyName}</Text>
        </View>
        <View style={styles.info}>
          <Text>Адресс проживания:</Text>
          <Text>{userInfoStore.userInfo.address}</Text>
        </View>
        <View style={styles.info}>
          <Text>Номер лицевого счёта:</Text>
          <Text>{userInfoStore.userInfo.contractNumber}</Text>
        </View>
      </View>
      <Text style={styles.text}>Hello</Text>
      <View style={styles.button}>
        <Button title="Выйти" onPress={logout} />
      </View>
      <View style={styles.button}></View>
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
