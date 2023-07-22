import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeArea } from '../../components/Utility/safearea.utility';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab2 = createMaterialTopTabNavigator();

const HomeScreen = () => (
    <Text
      style={{
        fontSize: 40,
        textAlign: 'center',
        alignItem: 'center',
      }}>
      HomeScreen
    </Text>
);
const SettingsScreen = () => (
  <Text
    style={{
      fontSize: 40,
      textAlign: 'center',
      alignItem: 'center',
    }}>
    SettingsScreen
  </Text>
);
export const NavigationMaterial = () => {
  return (
    <Tab2.Navigator>
      <Tab2.Screen name="Home" component={HomeScreen} />
      <Tab2.Screen name="Settingstwo" component={SettingsScreen} />
    </Tab2.Navigator>
  );
};
