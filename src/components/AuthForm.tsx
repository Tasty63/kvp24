import React, { useContext, useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Context } from '../../App';

const AuthForm = () => {
  const [username, setUsername] = useState('59999998022');
  const [password, setPassword] = useState('PMTVTT6');

  const { store } = useContext(Context);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput onChangeText={setUsername} value={username} placeholder="Логин" style={{ padding: 10 }} />
      <TextInput
        onChangeText={setPassword}
        value={password}
        placeholder="Пароль"
        secureTextEntry
        style={{ padding: 10 }}
      />
      <Button title="Войти" onPress={() => store.login(username, password)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },
});

export default AuthForm;
