import HomeScreen from './HomeScreen';
import IndicationsScreen from './IndicationsScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'Главная' }} />
      <Tab.Screen name="Indications" component={IndicationsScreen} options={{ tabBarLabel: 'Показания' }} />
    </Tab.Navigator>
  );
};

export default HomeTabs;
