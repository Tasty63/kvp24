import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { observer } from 'mobx-react-lite';
import { Context } from '../../App';

const AuthForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { store } = useContext(Context);

  return (
    <SafeAreaView>
      <TextInput onChangeText={setUsername} placeholder="Логин" style={{ padding: 10 }}></TextInput>
      <TextInput onChangeText={setPassword} placeholder="Пароль" secureTextEntry style={{ padding: 10 }}></TextInput>
      <Button title="Войти" onPress={() => store.login(username, password)} />
    </SafeAreaView>
  );
};

export default AuthForm;
