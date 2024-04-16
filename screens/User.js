import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import ContactThumbnail from '../components/ContactThumbnail';
import colors from '../utility/colors';
import { fetchUserContact } from '../utility/api';

const User = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

useEffect(() => {
  const fetchUserData = async () => {
    try {
      const userData = await fetchUserContact();
      setUser(userData);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  fetchUserData();
}, []);


  const { avatar, name, phone } = user;

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" />}
      {!loading && error && <Text>Error...</Text>}
      {!loading && !error && <ContactThumbnail avatar={avatar} name={name} phone={phone} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue,
  },
});

export default User;
