import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import TipsScreen from '../screens/TipsScreen';
import AboutScreen from '../screens/AboutScreen';
import CountrySearch from '../screens/CountrySearch';
import CountryDetails from '../screens/CountryDetails';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const stack = createStackNavigator();

const TabMenu = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color = 'black' }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={CountrySearch}
        options={{
          tabBarLabel: 'Search Country',
          tabBarIcon: ({ color = 'black' }) => (
            <MaterialCommunityIcons name="search-web" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Tips"
        component={TipsScreen}
        options={{
          tabBarLabel: 'Protect Myself!',
          tabBarIcon: ({ color = 'black' }) => (
            <MaterialCommunityIcons name="help" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({ color = '#000' }) => (
            <MaterialCommunityIcons
              name="information-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabMenu;
