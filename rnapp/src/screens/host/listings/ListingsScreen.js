import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {List, ListItem} from 'react-native-ui-kitten';

export default function ListingsScreen(props) {
  const {listings} = props;
  const data = [{id: 1, title: 'ddd'}, {id: 2, title: 'ddd'}]; //listings;

  const onItemPress = index => {
    // Handle List Item press
    console.log('OK Pressed', index);
    props.navigation.navigate('HostListing', {id: 1});
  };

  const renderItem = info => {
    return (
      <ListItem
        title={'title'}
        description="Description"
        onPress={onItemPress}
      />
    );
  };

  return <List data={data} renderItem={renderItem} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
