import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from './src/infrastructure/theme/colors';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { theme } from './src/infrastructure/theme';
import { SafeArea } from './src/components/Utility/safearea.utility';
import { NavigationMaterial } from './src/infrastructure/navigation/navigation';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: 'md-restaurant',
  Map: 'md-map',
  Settings: 'md-settings',
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};
const RestaurantsScreen = () => (
  <>
    <NavigationMaterial />
  </>
);

const Settings = () => (
  <SafeArea>
    <NavigationMaterial />
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <NavigationMaterial />
  </SafeArea>
);
export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: colors.brand.primary,
              inactiveTintColor: colors.brand.muted,
            }}>
            <Tab.Screen
              name="Restaurants"
              component={RestaurantsScreen}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="Map"
              component={Map}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="Settings"
              component={Settings}
              options={{ headerShown: false }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
