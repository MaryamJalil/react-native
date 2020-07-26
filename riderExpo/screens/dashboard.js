import React, { Component } from "react";
import { Container, Header, Icon, Left, Body, Right, Text, Content } from "native-base";
import { StatusBar, FlatList, TouchableOpacity, StyleSheet, View } from "react-native";


export default class Dashboard extends Component{

        state = {
            data: [
              {
                OrderId: 1,
                Status: 'In Kitchen',
                time: '5 minutes left',
                price: 'RS 53.00',
              },
              {
                OrderId: 2,
                Status: 'Delivered',
                time: '30 minutes left',
                price: 'RS 53.00',
              },
              {
                OrderId: 3,
                Status: 'Delivered',
                time: '2 hours ago',
                price: 'RS 53.00',
              },
              {
                OrderId: 4,
                Status: 'Canceled',
                time: '1 hour ago',
                price: 'RS 53.00',
              },
            ],
        }
        PrintCards = post => {
            let item = post.item;
            let index = post.index;
            return (
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Details');
                }}
                activeOpacity={0.7}
                style={Styles.MainCard}>
                <View style={Styles.Left}>
                  <Text style={Styles.MediumBoldText}>
                    {'Order #'}
                    {item.OrderId}
                  </Text>
                  <Text
                    style={[
                      Styles.SmallText,
                      {color: '#8E0438'},
                      item.Status === 'In Kitchen' ? {color: '#8E0438'} : null,
                    ]}>
                    {item.Status}
                  </Text>
                </View>
                <View style={Styles.Middle}>
                  <Text style={[Styles.MediumBoldText, {color: 'black'}]}>
                    {item.price}
                  </Text>
                  <Text style={[Styles.SmallText, {color: '#8E0438'}]}>{item.time}</Text>
                </View>
                <View style={Styles.Right}>
                  <Icon
                    name='ios-arrow-forward'
                    style = {{color:'black'}}
                  />
                </View>
              </TouchableOpacity>
            );
          };
    

    render(){
        return(
            <Container style={{backgroundColor:''}}>
        <Header style={{backgroundColor:'#8E0438'}}>
        <StatusBar backgroundColor='#8E0438' barStyle="light-content" />
        <Left>
              <Icon name='menu' style={{color:'white'}} onPress={()=>this.props.navigation.toggleDrawer()}/>
          </Left>
          <Body>
            <Text style={{fontSize:20, color:'white'}}>Dashboard</Text>
          </Body>
          <Right/>
        </Header>
        <Content>
        <FlatList
        data={this.state.data}
        keyExtractor={item => item.id}
        contentContainerStyle={Styles.contentContainerStyle}
        ItemSeparatorComponent={() => <View style={Styles.Seprator} />}
        renderItem={item => this.PrintCards(item)}
        />
        </Content>
            </Container>
        )
    }
}
const Styles = StyleSheet.create({
    contentContainerStyle: {
      paddingVertical: 20,
      width: '100%',
      alignSelf: 'center',
    },
    Seprator: {
      marginBottom: 10,
    },
    MainCard: {
      width: '90%',
      backgroundColor: 'white',
      alignSelf: 'center',
  
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 10,
    },
  
    SmallText: {
      color: '#8E0438',
      fontSize: 16,
    },
    MediumBoldText: {
      color: 'black',
      fontSize: 20,
      fontWeight: 'bold',
    },
    Left: {
      width: '50%',
      // backgroundColor: 'green',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    Middle: {
      width: '35%',
      // backgroundColor: 'red',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    Right: {
      width: '10%',
      // backgroundColor: 'orange',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  