import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  //SafeAreaView,
  StatusBar,
  TextInput,
  Image,
  ScrollView
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {ListItem} from 'react-native-elements';
import { Container, Header, Left, Icon, Body, Right, Content } from 'native-base';

export default class OrderNumber extends Component { 

  render() {
    return (
        <Container style={{backgroundColor:''}}>
        <Header style={{backgroundColor:'#8E0438'}}>
        <StatusBar backgroundColor='#8E0438' barStyle="light-content" />
        <Left>
              <Icon name='arrow-back' style={{color:'white'}} onPress={()=>this.props.navigation.goBack()}/>
          </Left>
          <Body>
            <Text style={{fontSize:20, color:'white'}}>History Detail</Text>
          </Body>
          <Right/>
        </Header>
        <Content>
          <View style={Styles.HeaderTextView}>
            <Text style={Styles.HeaderLargeText}>{'Orders # 2342'}</Text>
          </View>
          
          <View style={Styles.titleContainer}>
            <Text style={Styles.titleStyle1}>{'Delivered-'}</Text>
            <Text style={Styles.titleStyle2}>{'Yesterday'}</Text>
          </View>
          
          <View style={Styles.titleContainer}>
            <Text style={Styles.titleStyle1}>{'Address-'}</Text>
            <Text style={Styles.titleStyle2}>
              {'165 Broad St,Degenham RM 109Hx'}
            </Text>
          </View>

        <ScrollView>
            <View style={{width:'100%',height:'100%'}} >
            <View>
          <FlatList
            data={[1, 2, 4, 5]}
            renderItem={item => (
              <ListItem
                leftAvatar={
                  <View style={{height: '85%', width: '20%'}}>
                    <View
                      style={{
                        height: '100%',
                        width: '90%',
                        backgroundColor: 'white',
                        borderRadius: responsiveWidth(2),
                        elevation: 5,
                      }}
                    />
                  </View>
                }
                title={'Mexican Passion'}
                subtitle={'2 item x RS 8.50'}
                rightTitle={'RS 2432'}
                //rightSubtitle={'£566'}
                titleStyle={Styles.leftTitleStyles}
                subtitleStyle={Styles.leftSubtitleStyles}
                rightTitleStyle={Styles.rightTitleStyle}
               // rightSubtitleStyle={Styles.rightSubtitleStyle}
                // rightSubtitleProps={{textDecorationLine:'line-through'}}
                // checkmark
                // onPress={() => this.props.navigation.navigate('DeliveryHistoryHome')}
                underlayColor={'white'}
                // chevron={
                //   <Ionicons
                //     name={'ios-arrow-forward'}
                //     color={'gray'}
                //     size={responsiveFontSize(2.5)}
                //     style={{marginLeft: responsiveWidth(3)}}
                //   />
                // }
                containerStyle={Styles.listContainer}
              />
            )}
          />
          </View>
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
                  {color: 'grey', fontSize: responsiveFontSize(1.6)},
                ]}>
                {'Total'}
              </Text>
              <Text
                style={[
                  Styles.ExtraSmallText,
                  {color: 'grey', fontSize: responsiveFontSize(1.6)},
                ]}>
                {'RS '}
                {'45.00'}
              </Text>
            </View>
            <View
              style={{
                marginTop: responsiveHeight(2),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '90%',
              }}>
              <Text
                style={[
                  Styles.ExtraSmallText,
                  {color: 'grey', fontSize: responsiveFontSize(1.6)},
                ]}>
                {'Delivery'}
              </Text>
              <Text
                style={[
                  Styles.ExtraSmallText,
                  {color: 'grey', fontSize: responsiveFontSize(1.6)},
                ]}>
                {'RS '}
                {'7.0'}
              </Text>
            </View>
            <View
              style={{
                marginTop: responsiveHeight(2),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '90%',
              }}>
              <Text style={[Styles.ExtraSmallText, {color: '#8E0438',fontWeight:'bold'}]}>
                {'Total'}
              </Text>
              <Text style={[Styles.ExtraSmallText, {color: '#8E0438',fontWeight:'bold'}]}>
                {'RS '}
                {'7.0'}
              </Text>
            </View>
          </View>
          </View>
        </ScrollView>

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
    height: responsiveHeight(28),
    width: '100%',
    backgroundColor: 'white',
    // backgroundColor:'red'
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
    color: '#8E0438',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.2),
    letterSpacing: 1,
  },
  headerImageStyle: {
    width: responsiveWidth(8),
    height: responsiveHeight(5),
    resizeMode: 'contain',
  },
  titleContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    // backgroundColor: 'green'
  },
  titleStyle1: {
    color: '#8E0438',
    fontWeight: '900',
    fontSize: responsiveFontSize(2),
  },
  titleStyle2: {
    // color: 'red',
    fontWeight: '900',
    fontSize: responsiveFontSize(2),
  },
  listContainer: {
    padding: 5,
    height: responsiveHeight(12),
    width: responsiveWidth(90),
    alignSelf: 'center',
  },
  leftTitleStyles: {
    // color: blue,
    fontWeight: 'bold',
    fontSize: responsiveFontSize(1.9),
    // letterSpacing: 1,
  },
  leftSubtitleStyles: {
    color: 'grey',
    fontWeight: '900',
    fontSize: responsiveFontSize(1.6),
    // letterSpacing: 1,
  },
  rightSubtitleStyle: {
    // color: blue,
    fontWeight: '900',
    textDecorationLine: 'line-through',
    textDecorationColor:'grey',
    fontSize: responsiveFontSize(1.6),
    // letterSpacing: 1
  },
  rightTitleStyle: {
    color: '#8E0438',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(1.9),
    // letterSpacing: 1
  },
  TotalView: {
    width: '70%',
    alignSelf: 'flex-end',
  },
  ExtraSmallText: {
    fontSize: responsiveFontSize(1.8),
    color: 'black',
  },
});
