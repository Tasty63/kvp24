import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';

const AuthScreen = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <AuthForm />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
});

export default AuthScreen;
