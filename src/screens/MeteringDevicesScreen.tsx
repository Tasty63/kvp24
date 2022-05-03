import React, { useCallback, useContext, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, Button, View, TextInput } from 'react-native';
import { observer } from 'mobx-react-lite';
import { Context } from '../store/RootStore';
import { useFocusEffect } from '@react-navigation/native';

export interface MeteringDeviceField {
  id: number;
  value: string;
}

const MeteringDevicesScreen = observer(() => {
  const [fields, setFields] = useState<MeteringDeviceField[]>([]);
  const { meteringDevicesStore } = useContext(Context);

  useFocusEffect(
    useCallback(() => {
      meteringDevicesStore.getMeteringDevices();
    }, [])
  );

  const setField = (id: number, value: string) => {
    setFields([...fields, { id, value }]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Показания</Text>

      <View>
        {meteringDevicesStore.meteringDevices.map((meteringDevice) => (
          <View key={meteringDevice.id} style={styles.info}>
            <Text>{meteringDevice.facility}</Text>
            <TextInput></TextInput>
          </View>
        ))}
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
