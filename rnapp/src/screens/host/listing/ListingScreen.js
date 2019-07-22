import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
  Button,
} from 'react-native';
import {withStyles} from 'react-native-ui-kitten/theme';
import {Text} from 'react-native-ui-kitten/ui';

import {RateBar, textStyle} from '../../../components';

/*
interface ComponentProps {
  image: ImageSourcePropType;
  title: string;
  author: string;
  categories: string[];
  rating: number;
  price: string;
}
*/

/**
 * navigationOptions
 */
ListingScreen.navigationOptions = screenProps => {
  const {state} = screenProps.navigation;
  const id = screenProps.navigation.getParam('id');
  return {
    headerTitle: 'New Task',
    headerRight: (
      <Button title="Save" onPress={() => state.params.handleSave()} />
    ),
  };
};

export default function ListingScreen(props) {
  const listing_id = props.navigation.getParam('id');
  /*const {
    style,
    themedStyle,
    image,
    title,
    author,
    categories,
    rating,
    price,
  } = props.listing;
*/

  const onItemPublishPress = ({listing_id, is_publish}) => {
    // Handle List Item press
    console.log('OK Pressed');
    props.doPublish(listing_id);
    // props.doPrivate(listing_id);
  };

  return (
    <View>
      <Text>{listing_id}</Text>
      <Button onPress={onItemPublishPress}>公開する</Button>
    </View> /* (
    <View>
      <Image style={themedStyle.image} source={image} />
      <View style={themedStyle.detailsContainer}>
        <Text style={themedStyle.titleLabel} category="s1">
          {title}
        </Text>
        <Text style={themedStyle.authorLabel} appearance="hint" category="c1">
          {`Author: ${author}`}
        </Text>

        <RateBar style={themedStyle.marginBottomLarge} value={rating} />
        <Text style={themedStyle.priceLabel} category="s1">
          {price}
        </Text>
      </View>
    </View>
  ) */
  );
}

export const themedStyle = withStyles(ListingScreen => ({
  container: {
    flexDirection: 'row',
    overflow: 'hidden',
  },
  detailsContainer: {
    marginLeft: 24,
  },
  image: {
    width: 140,
    height: 180,
    borderRadius: 12,
  },
  titleLabel: textStyle.subtitle,
  authorLabel: {
    marginTop: 4,
    ...textStyle.caption1,
  },
  priceLabel: {
    marginTop: 16,
    ...textStyle.subtitle,
  },
  categoryList: {
    marginVertical: 16,
  },
}));
