import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  TextInput,
  ScrollView,
  Image,
  BackHandler,
} from 'react-native';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
import { Container, Header, Left, Body, Right, Content, Icon } from 'native-base';

export default class Categories extends Component {
  state = {
    Data: [
      {
        id: 1,
        Name: 'Mexican Passion',
        quantity: '2',
        price: '2.50',
        orignalPrice: '19.00',
        total: '17.00',
      },
      {
        id: 2,
        Name: 'Mexican Passion',
        quantity: '2',
        price: '2.50',
        orignalPrice: '19.00',
        total: '17.00',
      },
      {
        id: 3,
        Name: 'Mexican Passion',
        quantity: '2',
        price: '2.50',
        orignalPrice: '19.00',
        total: '17.00',
      },
      {
        id: 4,
        Name: 'Mexican Passion',
        quantity: '2',
        price: '2.50',
        orignalPrice: '19.00',
        total: '17.00',
      },
    ],
  };

  PrintCard = post => {
    let item = post.item;
    return (
      <View style={Styles.MainCard}>
        <View style={Styles.InnerCardView}>
          <View style={Styles.Left}>
            <View style={{width: '20%', justifyContent: 'center'}}>
              <Icon name='ios-checkmark-circle-outline'/>
            </View>
            <View style={{width: '70%', justifyContent: 'center'}}>
              <Text style={[Styles.ExtraSmallText, {fontWeight: 'bold'}]}>
                {item.Name}
              </Text>
              <Text
                style={[
                  Styles.ExtraSmallText,
                  {color: 'grey', fontSize: 14},
                ]}>
                {item.quantity}
                {' item'}
                {' x '}
                {'RS '}
                {item.price}
              </Text>
            </View>
          </View>
          <View style={Styles.Right}>
            <Text
              style={[
                Styles.ExtraSmallText,
                {
                  color: '#8E0438',
                  fontSize: 14,
                  fontWeight: 'bold',
                },
              ]}>
              {'RS '}
              {item.total}
            </Text>
            <Text
              style={[
                Styles.ExtraSmallText,
                {
                  color: 'black',
                  fontSize: 12,
                  textDecorationColor: 'black',
                  textDecorationLine: 'line-through',
                  textDecorationStyle: 'solid',
                },
              ]}>
              {'RS '}
              {item.orignalPrice}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
        <Container style={{backgroundColor:''}}>
        <Header style={{backgroundColor:'#8E0438'}}>
        <StatusBar backgroundColor='#8E0438' barStyle="light-content" />
        <Left>
              <Icon name='arrow-back' style={{color:'white'}} onPress={()=>this.props.navigation.goBack()}/>
          </Left>
          <Body>
            <Text style={{fontSize:20, color:'white'}}>Order Detail</Text>
          </Body>
          <Right/>
        </Header>
        <Content>
        <View style={Styles.Header}>
          <View style={Styles.HeaderTextView}>
            <Text style={Styles.HeaderLargeText}>
              {'Orders'}
              {'#'}
              {'0013'}
            </Text>
          </View>
          <View
            style={{flexDirection: 'row', width: '90%', alignSelf: 'center'}}>
            <Text style={[Styles.ExtraSmallText, {color: '#8E0438'}]}>
              {'Ready '}
            </Text>
            <Text style={Styles.ExtraSmallText}>
              {' - '}
              {'5 minutes ago'}
            </Text>
          </View>
          <View
            style={{flexDirection: 'row', width: '90%', alignSelf: 'center'}}>
            <Text style={[Styles.ExtraSmallText, {color: '#8E0438'}]}>
              {'Address '}
            </Text>
            <Text style={Styles.ExtraSmallText}>
              {' - '}
              {'165 Broad Street Dagenhem Rm91 9HX'}
            </Text>
          </View>
        </View>
      
          <FlatList
            data={this.state.Data}
            keyExtractor={item => item.id}
            contentContainerStyle={Styles.contentContainerStyle}
            ItemSeparatorComponent={() => <View style={Styles.Seprator} />}
            renderItem={item => this.PrintCard(item)}
          />

          <View style={Styles.TotalView}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '90%',
              }}>
              <Text
                style={[
                  Styles.ExtraSmallText,
                  {color: 'grey', fontSize: 14},
                ]}>
                {'Total'}
              </Text>
              <Text
                style={[
                  Styles.ExtraSmallText,
                  {color: 'grey', fontSize: 14},
                ]}>
                {'RS '}
                {'45.00'}
              </Text>
            </View>
            <View
              style={{
                marginTop: 12,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '90%',
              }}>
              <Text
                style={[
                  Styles.ExtraSmallText,
                  {color: 'grey', fontSize: 14},
                ]}>
                {'Delivery'}
              </Text>
              <Text
                style={[
                  Styles.ExtraSmallText,
                  {color: 'grey', fontSize: 14},
                ]}>
                {'RS '}
                {'7.0'}
              </Text>
            </View>
            <View
              style={{
                marginTop: 12,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '90%',
              }}>
              <Text style={[Styles.ExtraSmallText, {color: '#8E0438'}]}>
                {'Total'}
              </Text>
              <Text style={[Styles.ExtraSmallText, {color: '#8E0438'}]}>
                {'RS '}
                {'7.0'}
              </Text>
            </View>
          </View>
          <View style={Styles.ButtonView}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.replace('Tracker');
              }}
              style={Styles.ButtonTouch}>
              <Text style={[Styles.ExtraSmallText, {color: 'white'}]}>
                Start Ride
              </Text>
            </TouchableOpacity>
          </View>
        
      </Content>
      </Container>
    );}
}

const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    Header: {
      height: responsiveHeight(15),
      width: '100%',
      backgroundColor: 'white',
    },
    ArrowView: {
      height: responsiveHeight(10),
      width: '90%',
      alignSelf: 'center',
      justifyContent: 'flex-end',
    },
    HeaderTextView: {
      paddingTop: responsiveHeight(1),
      width: '90%',
      alignSelf: 'center',
    },
    HeaderLargeText: {
      color: '#8E0438',
      fontWeight: 'bold',
      fontSize: responsiveFontSize(4),
      letterSpacing: 1,
    },
    HeaderSmallText: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: responsiveFontSize(2.2),
      letterSpacing: 1,
    },
    headerImageStyle: {
      width: responsiveWidth(8),
      height: responsiveHeight(5),
      resizeMode: 'contain',
    },
    ExtraSmallText: {
      fontSize: responsiveFontSize(1.8),
      color: 'black',
    },
    Seprator: {
      marginTop: responsiveHeight(2),
    },
    contentContainerStyle: {
      paddingVertical: responsiveHeight(5),
    },
    MainCard: {
      width: '90%',
      alignSelf: 'center',
      paddingVertical: responsiveHeight(1),
      justifyContent: 'center',
    },
    InnerCardView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      // alignItems: 'center',
      width: '100%',
    },
    Left: {
      width: '80%',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    Right: {
      width: '20%',
      justifyContent: 'center',
    },
    TotalView: {
      width: '70%',
      height: responsiveHeight(10),
      alignSelf: 'flex-end',
    },
    ButtonView: {
      width: '100%',
      height: responsiveHeight(15),
      justifyContent: 'center',
      alignItems: 'center',
    },
    ButtonTouch: {
      width: '60%',
      height: responsiveHeight(6),
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#8E0438',
    },
  });
  