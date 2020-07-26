import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';

class SplashScreen extends React.Component {
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    )
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.replace('Loginscreen');
    }
  }

  render() {
    return (
      <View style={styles.viewStyles}>
          <StatusBar backgroundColor='#8E0438' barStyle="light-content" />
          <Image
      style={{height:150, width:150}}
      source={require('../assets/menu.png')}
      />
      <Text 
      style={styles.textStyles}
      >Digital Bites
      </Text>  
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    marginTop:-70,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8E0438'
  },
  textStyles: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  }
}

export default SplashScreen;
