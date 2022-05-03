import HomeScreen from './HomeScreen';
import MeteringDevicesScreen from './MeteringDevicesScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'Главная' }} />
      <Tab.Screen name="Indications" component={MeteringDevicesScreen} options={{ tabBarLabel: 'Показания' }} />
    </Tab.Navigator>
  );
};

export default HomeTabs;
