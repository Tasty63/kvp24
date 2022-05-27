import HomeScreen from './HomeScreen';
import MeteringDevicesScreen from './MeteringDevicesScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Главная',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Indications"
        component={MeteringDevicesScreen}
        options={{
          tabBarLabel: 'Показания',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="water" color={color} size={26} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;
