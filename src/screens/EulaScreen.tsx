import React, { useContext, useEffect, useState } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Context } from '../store/RootStore';
import { observer } from 'mobx-react-lite';

const EulaScreen = observer(() => {
  const [isChecked, setChecked] = useState(false);
  const { userInfoStore } = useContext(Context);
  const { setEulaAccepted } = userInfoStore;

  useEffect(() => {
    userInfoStore.getInfo();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.eula}>
        <BouncyCheckbox onPress={() => setChecked(!isChecked)} isChecked={isChecked} />
        <Text style={styles.text}>
          Нажимая кнопку «Продолжить», я принимаю условия Пользовательского соглашения и даю своё согласие ООО
          «Квартплата 24» на обработку моих персональных данных, в соответствии с Федеральным законом от 27.07.2006 года
          №152-ФЗ «О персональных данных», на условиях и для целей, определенных Политикой обработки персональных
          данных.
        </Text>
      </Text>
      <Button title="Продолжить" disabled={!isChecked} onPress={setEulaAccepted} />
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: '100%',
    marginHorizontal: 30,
  },
  eula: {
    marginBottom: 30,
  },
  text: {
    fontSize: 18,
    lineHeight: 24,
  },
});

export default EulaScreen;
