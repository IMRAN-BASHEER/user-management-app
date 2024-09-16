// src/screens/UserDetailScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const UserDetailScreen = ({ route }) => {
  const { user } = route.params;

  return (
    <View style={{ flex: 1, alignSelf: 'center', marginTop: 50 }}>
      <Text style={{
        fontSize: 16,
        marginTop: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black'
      }}>Name: {user.name.first} {user.name.last}</Text>
      <Text style={{
        fontSize: 16,
        marginTop: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black'
      }}>Email: {user.email}</Text>
      <Text style={{
        fontSize: 16,
        marginTop: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black'
      }}>Phone: {user.phone}</Text>
    </View>
  );
};

export default UserDetailScreen;
