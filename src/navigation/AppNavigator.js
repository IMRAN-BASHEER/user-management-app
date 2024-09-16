// src/navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserListScreen from '../screens/UserListScreen';
import UserDetailScreen from '../screens/UserDetailScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="UserList">
    <Stack.Screen name="UserList" component={UserListScreen} />
    <Stack.Screen name="UserDetail" component={UserDetailScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
