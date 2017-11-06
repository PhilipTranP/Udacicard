import React from 'react';
import { Platform } from 'react-native';
import {
  TabNavigator,
  StackNavigator,
  DrawerNavigator,
} from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

import WelcomeScreen from './screens/Welcome';
import CardList from './screens/HOME/CardList';
import CardView from './screens/HOME/CardView';
import QuestionView from './screens/HOME/QuestionView';
import AnswerView from './screens/HOME/AnswerView';
import ProfileScreen from './screens/Profile';
import AddDeskScreen from './screens/NEWDESK';
import SettingsScreen from './screens/Settings';

import { HamburgerIcon, SettingsIcon, BackIcon } from './components/icons';

import { CustomDrawerContent } from './components';
import { colors } from './utils/constants';

const AppMainTab = TabNavigator({
  Home: {
    screen: CardList,
    navigationOptions: ({ navigation }) => ({
      drawerLabel: 'UdaciCards',
      drawerIcon: ({ tintColor }) => (
        <FontAwesome name="home" size={23} color={tintColor} />
      ),
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="home" size={23} color={tintColor} />
      ),
      headerStyle: {
        backgroundColor: colors.BLACK,
      },
      headerTitle: 'UdaciCards',
      headerTitleStyle: {
        color: colors.WHITE,
      },
      headerLeft: <HamburgerIcon onPress={() => navigation.navigate('DrawerOpen')} />,
    })
  },
  AddTopic: {
    screen: AddDeskScreen,
    navigationOptions: ({ navigation }) => ({
      drawerLabel: 'Add Desk',
      drawerIcon: ({ tintColor }) => (
        <FontAwesome name="plus" size={23} color={tintColor} />
      ),
      tabBarLabel: 'Add Desk',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="plus" size={23} color={tintColor} />
      ),
      headerStyle: {
        backgroundColor: colors.BLACK,
      },
      headerTitle: 'Add Desk',
      headerTitleStyle: {
        color: colors.WHITE,
      },
      headerLeft: <HamburgerIcon onPress={() => navigation.navigate('DrawerOpen')} />,
    })
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => ({
      drawerLabel: 'Profile',
      drawerIcon: ({ tintColor }) => (
        <FontAwesome name="user-circle" size={23} color={tintColor} />
      ),
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="user-circle" size={23} color={tintColor} />
      ),
      headerStyle: {
        backgroundColor: colors.BLACK,
      },
      headerTitle: 'Profile',
      headerTitleStyle: {
        color: colors.WHITE,
      },
      headerLeft: <HamburgerIcon onPress={() => navigation.navigate('DrawerOpen')} />,
      headerRight: <SettingsIcon onPress={() => navigation.navigate('Settings')} />,
    })
  },
}, {
  tabBarOptions: {
    activeTintColor: colors.WHITE,
    inactiveTintColor: colors.PINK_50,
    inactiveBackgroundColor: colors.BLACK,
    activeBackgroundColor: colors.BLACK,
    showIcon: true,
    showLabel: Platform.OS === 'ios',
    indicatorStyle: {
      backgroundColor: colors.PINK_300,
    },
    style: {
      backgroundColor: colors.BLACK,
    },
    upperCaseLabel: false,
  },
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
});

const AppMainStack = StackNavigator({
  Home: { screen: AppMainTab },
  Settings: { screen: SettingsScreen },
  CardView: { screen: CardView },
  QuestionView: { screen: QuestionView},
  AnswerView: { screen: AnswerView},
}, {
  cardStyle: {
    backgroundColor: colors.PRIMARYBLUE,
  },
  mode: 'modal',
});

const AppDrawer = DrawerNavigator({
  Home: {
    screen: AppMainStack,
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => ({
      drawerLabel: 'Settings',
      drawerIcon: ({ tintColor }) => (
        <Ionicons name="md-settings" size={23} color={tintColor} />
      ),
      headerStyle: {
        backgroundColor: colors.BLACK,
      },
      headerTitle: 'Settings',
      headerTitleStyle: {
        color: colors.WHITE,
      },
      headerLeft: <BackIcon onPress={() => navigation.goBack()} />,
    })
  },
}, {
  contentComponent: props =>
    (<CustomDrawerContent
      {...props}
    />),
  contentOptions: {
    activeBackgroundColor: colors.BLACK,
    activeTintColor: colors.WHITE,
    inactiveTintColor: colors.PRIMARYBLUE,
  },
});

const Navigator = TabNavigator({
  Welcome: { screen: WelcomeScreen },
  Main: { screen: AppDrawer },
}, {
  navigationOptions: {
    tabBarVisible: false,
  },
  swipeEnabled: false,
});

export default Navigator;
