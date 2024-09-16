import React, { useEffect } from 'react';
import { FlatList, View, Text, ActivityIndicator, RefreshControl, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersRequest, resetUsers } from '../redux/slices/userSlice';

const UserListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { users, page, isLoading } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsersRequest({ page: 1 }));
  }, []);

  const loadMoreUsers = () => {
    if (!isLoading) {
      dispatch(fetchUsersRequest({ page: page + 1 }));
    }
  };

  const refreshUsers = () => {
    dispatch(resetUsers());
    dispatch(fetchUsersRequest({ page: 1 }));
  };

  const renderItem = ({ item }) => (
    <View style={{ marginTop: 30, backgroundColor: 'green', height: 50, borderRadius: 20 }}>
      <Text
        style={styles.userText} // Applying the userText style
        onPress={() => navigation.navigate('UserDetail', { user: item })}
      >
        {item.name.first} {item.name.last}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.login.uuid || item.email}
        onEndReached={loadMoreUsers}
        onEndReachedThreshold={0.5}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refreshUsers} />
        }
        ListFooterComponent={isLoading ? <ActivityIndicator /> :
          null}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  userText: {
    fontSize: 16,
    marginTop: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    color:'white'
  },
});

export default UserListScreen;
