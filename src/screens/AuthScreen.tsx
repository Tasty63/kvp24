import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';

const AuthScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AuthForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
  },
});

export default AuthScreen;
