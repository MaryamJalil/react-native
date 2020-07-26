import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../../shared/header';
import Notification from '../../screens/notification';

const screens = {
  Notification: {
    screen:Notification,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Pet Store' navigation={navigation} />
      }
    },
  },
}

const NotificationStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default NotificationStack;