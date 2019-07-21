/* eslint-disable import/no-unresolved */
import React from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';

import {Home, Auth, HostListings, HostListing} from './Stacks';

const HomeStack = createStackNavigator(
  {
    Home,
    Auth,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      tabBarLabel: 'ホーム',
      tabBarIcon: <Icon name="dashboard" size={24} />,
    },
  },
);

const AuthStack = createStackNavigator(
  {
    Auth,
  },
  {
    initialRouteName: 'Auth',
    navigationOptions: {
      tabBarLabel: 'マイページ',
      tabBarIcon: <Icon name="user" size={24} />,
    },
  },
);

const HostListingStack = createStackNavigator(
  {
    HostListings,
    HostListing,
  },
  {
    initialRouteName: 'HostListings',
    navigationOptions: {
      tabBarLabel: '店舗',
      tabBarIcon: <Icon name="home" size={24} />,
    },
  },
);
/**
 * BottomTabNavigator
 */
export const BottomTabNavigatorToHost = createBottomTabNavigator({
  Listing: HostListingStack,
  Auth: AuthStack,
});

export const BottomTabNavigatorToGest = createBottomTabNavigator({
  Home: HomeStack,
});
/*
export default createBottomTabNavigator(
  {
    Explore: {
      screen: ExploreScreen,
      navigationOptions: {
        header: null,
        tabBarLabel: 'さがす',
        tabBarIcon: ({tintColor}) => (
          <Icon name="search" color={tintColor} size={24} />
        ),
      },
    },
    Reserve: {
      screen: CalendarScreen,
      navigationOptions: {
        tabBarLabel: '予定',
        tabBarIcon: ({tintColor}) => (
          <Image
            source={iconCalendar}
            style={{height: 21, width: 21, tintColor: tintColor}}
          />
        ),
      },
    },
    Inbox: {
      screen: InboxScreen,
      navigationOptions: {
        tabBarLabel: '受信トレイ',
        tabBarIcon: ({tintColor}) => (
          <Icon name="inbox" color={tintColor} size={24} />
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'プロフィール',
        tabBarIcon: ({tintColor}) => (
          <Icon name="person" color={tintColor} size={24} />
        ),
      },
    },
    /*
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
    Calendar: {
      screen: CalendarScreen,
      navigationOptions: {
        header: (
          <View style={styles.headerContainer}>
            <Image style={styles.headerImage} source={hederBackground} />
            <Text style={styles.headerCaption}>Calendar</Text>
          </View>
        ),
      },
    },
    Grids: {
      screen: GridsScreen,
      navigationOptions: {
        header: (
          <View style={styles.headerContainer}>
            <Image style={styles.headerImage} source={hederBackground} />
            <Text style={styles.headerCaption}>Grids</Text>
          </View>
        ),
      },
    },
    Pages: {
      screen: PagesScreen,
      navigationOptions: {
        header: (
          <View style={styles.headerContainer}>
            <Image style={styles.headerImage} source={hederBackground} />
            <Text style={styles.headerCaption}>Paes</Text>
          </View>
        ),
      },
    },
    Components: {
      screen: ComponentsScreen,
      navigationOptions: {
        header: (
          <View style={styles.headerContainer}>
            <Image style={styles.headerImage} source={hederBackground} />
            <Text style={styles.headerCaption}>Components</Text>
          </View>
        ),
      },
    },

  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({focused}) => {
        const {routeName} = navigation.state;
        let iconSource;
        switch (routeName) {
          case 'Home':
            iconSource = iconHome;
            break;
          case 'Calendar':
            iconSource = iconCalendar;
            break;
          case 'Grids':
            iconSource = iconGrids;
            break;
          case 'Pages':
            iconSource = iconPages;
            break;
          case 'Components':
            iconSource = iconComponents;
            break;
          default:
            iconSource = iconComponents;
        }
        return (
          <View style={styles.tabBarItemContainer}>
            <Image
              resizeMode="contain"
              source={iconSource}
              style={[styles.tabBarIcon, focused && styles.tabBarIconFocused]}
            />
          </View>
        );
      },
    }),
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      showLabel: true,
      style: {
        backgroundColor: Colors.white,
        borderTopWidth: 0.5,
        borderTopColor: '#d6d6d6',
      },
      labelStyle: {
        color: Colors.grey,
      },
    },
  },
);
    */
