import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Shop from '../screens/shop'
const screens = {
  ShopByCategory: {
    screen:Shop,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Pet Store' navigation={navigation} />
      }
    },
  },
}

const ShopStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default ShopStack;