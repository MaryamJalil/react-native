import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Health from '../screens/health';
const screens = {
 Health: {
    screen: Health,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Pet Store' navigation={navigation} />
      }
    },
  },
}

const HealthStack= createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default HealthStack;