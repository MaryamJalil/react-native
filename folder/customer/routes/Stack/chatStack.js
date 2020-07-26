import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';


import Chat from '../../screens/chat';
import Header from '../../shared/header';

const screens = {
  Chat: {
    screen: Chat,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Pet Store' navigation={navigation} />
      }
    },
  },
}

const ChatStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default ChatStack;