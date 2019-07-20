import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function ListingScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Listing Screen Here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
