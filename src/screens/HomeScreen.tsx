import React, { useContext, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, Button, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { Context } from '../store/RootStore';

const HomeScreen = observer(() => {
  const { userInfoStore, authStore } = useContext(Context);
  const { logout } = authStore;

  useEffect(() => {
    userInfoStore.getInfo();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.info}>
          <Text style={styles.text}>Лицевой счёт:</Text>
          <Text style={styles.text}>{userInfoStore.userInfo.contractNumber}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.text}>Адрес</Text>
          <Text style={styles.text}>{userInfoStore.userInfo.address}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.text}>Управляющая организация</Text>
          <Text style={styles.text}>{userInfoStore.userInfo.companyName}</Text>
        </View>
      </View>
      <View style={styles.button}>
        <Button title="Выйти" onPress={logout} />
      </View>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: '100%',
    marginHorizontal: 30,
  },
  text: {
    fontSize: 16,
  },
  info: {
    padding: 10,
  },
  button: {
    marginTop: '100%',
  },
});

export default HomeScreen;
