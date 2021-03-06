import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { TextInput, StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Context } from '../store/RootStore';

const AuthForm = observer(() => {
  const [username, setUsername] = useState('59999998022');
  const [password, setPassword] = useState('PMTVTT6');

  const { authStore } = useContext(Context);
  const { login } = authStore;

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
      <Button
        disabled={username.length === 0 || password.length === 0}
        title="Войти"
        onPress={() => login(username, password)}
      />
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },
});

export default AuthForm;
