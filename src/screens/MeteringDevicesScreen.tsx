import React, { useCallback, useContext, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, Button, View, TextInput } from 'react-native';
import { observer } from 'mobx-react-lite';
import { Context } from '../store/RootStore';
import { useFocusEffect } from '@react-navigation/native';
import { MeteringDeviceField } from '../../app.api';

const MeteringDevicesScreen = observer(() => {
  const [values, setValues] = useState<MeteringDeviceField>({});
  const { meteringDevicesStore } = useContext(Context);

  useEffect(() => {
    initMeteringDevices();
  }, []);

  const initMeteringDevices = async () => {
    await meteringDevicesStore.getMeteringDevices();
    const inputs = meteringDevicesStore.meteringDevices.reduce(
      (acc, meteringDevice) => ({ ...acc, [meteringDevice.id]: meteringDevice.todayReadingValue?.toString() }),
      {}
    );
    setValues(inputs);
  };

  const handleInputChange = (id: number, value: string) => {
    setValues({ ...values, [id]: value });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Показания</Text>
      <View>
        {meteringDevicesStore.meteringDevices.map((meteringDevice) => (
          <View key={meteringDevice.id} style={styles.info}>
            <Text>{meteringDevice.facility}</Text>
            <TextInput
              keyboardType="numeric"
              value={values[meteringDevice.id]}
              onChangeText={(newValue) => handleInputChange(meteringDevice.id, newValue)}
            ></TextInput>
          </View>
        ))}
      </View>
      <View>
        <Button title="Отправить" onPress={() => console.log(values)} />
      </View>
    </SafeAreaView>
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

export default MeteringDevicesScreen;
