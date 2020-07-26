import React, { Component } from "react";
import { Button, View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import { createSwitchNavigator, createAppContainer, NavigationActions } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Splash from "./screens/splash"
import Loginscreen from "./screens/login"
import OrderHistory from "./screens/history"
import Details from "./screens/details"
import Dashboard from "./screens/dashboard"
import Logout from "./screens/logout"
import Tracker from "./screens/track"
import History from "./screens/historyDetail"
import Invoice from "./screens/Invoice"
import Trk from "./screens/trcs"
import MenuDrawer from "./screens/drawer"

// const CustomDrawer = (props) =>{
//     console.log('testing')
//    return(
//      <ScrollView>
//        <View style={{backgroundColor:'#8E0438', height: 120, paddingTop:40, paddingHorizontal:20}}>
//            <Image/>
//          <Text style={{color:'white', fontSize: 20}}>Digital Bites</Text>
//          <View style={{flexDirection:'row'}}>
//            <Text style={{flex:1, color:'white', fontSize:15}}>user1</Text>
//          </View>
//          </View>
//      <SafeAreaView
//        style={{flex: 1}}
//        forceInset={{ top: 'always', horizontal: 'never' }}
//      >
//         <Text onPress={() => props.navigation.navigate('Dashboard')} style={{fontSize:20, marginTop:20, marginLeft:20, fontWeight:'500'}}>
//          Dashboard
//          </Text>
//          <Text onPress={() => props.navigation.navigate('OrderHistory')} style={{fontSize:20, marginTop:20, marginLeft:20, fontWeight:'500'}}>
//          History
//          </Text>
//          <View style={{borderBottomColor: 'lightgrey', borderBottomWidth: 1, marginTop:20}}/>
//          <Text onPress={() => props.navigation.navigate('Logout')} style={{fontSize:20, marginTop:20, fontWeight:'300', marginLeft:20}}>
//          Logout
//          </Text>
//      </SafeAreaView>
//    </ScrollView>
//    )}

// export const RootNavigator = createStackNavigator({
//     // Tracker:{
//     //     screen:Tracker,
//     //     navigationOptions:{
//     //         headerShown: false,
//     //         headerMode: 'none'
//     //     }},
//     Splash:{
//         screen:Splash,
//         navigationOptions:{
//             headerShown: false,
//             headerMode: 'none',
//         }},
//     Loginscreen:{
//         screen:Loginscreen,
//         navigationOptions:{
//             headerShown: false,
//             headerMode: 'none',
//         }},
//     Dashboard:{
//         screen:Dashboard,
//         navigationOptions:{
//             headerShown: false,
//             headerMode: 'none'
//         }},
//     Details:{
//         screen:Details,
//         navigationOptions:{
//             headerShown: false,
//             headerMode: 'none'
//         }},
//     Tracker:{
//         screen:Tracker,
//         navigationOptions:{
//             headerShown: false,
//             headerMode: 'none'
//         }},
//     History:{
//         screen:History,
//         navigationOptions:{
//             headerShown: false,
//             headerMode: 'none'
//         }},
//     Invoice:{
//         screen:Invoice,
//         navigationOptions:{
//             headerShown: false,
//             headerMode: 'none'
//         }},
//   })
//   //export createAppContainer(RootNavigator);

//   const DrawerNavigator = createDrawerNavigator({
//     RootNavigator:{
//         screen:RootNavigator,
//         navigationOptions:{
//             headerShown: false,
//             headerMode: 'none'
//         }},
//     OrderHistory:{
//         screen:OrderHistory,
//         navigationOptions:{
//             header: null,
//             headerMode: 'none'
//         }},
//     Logout:{
//         screen:Logout,
//         navigationOptions:{
//             headerShown: false,
//             headerMode: 'none'
//         }},
//     },
//     {contentComponent: CustomDrawer})
  
//   export default createAppContainer(DrawerNavigator);

  const AppNavigator = createSwitchNavigator({
    loginFlow: createStackNavigator({
        Splash: Splash,
        Loginscreen: Loginscreen,
    },
    {
        initialRouteName: 'Splash',
        defaultNavigationOptions: {
            headerShown: false
        }
    }),
    mainFlow: createDrawerNavigator({
        orderTrackFlow: createStackNavigator({
            Dashboard: Dashboard,
            Details: Details,
            Tracker: Tracker,
            Invoice: Invoice,
        },
        {
            initialRouteName: 'Dashboard',
            defaultNavigationOptions: {
                headerShown: false
            }
        }),
        orderHistoryFlow: createStackNavigator({
            OrderHistory: OrderHistory,
            History: History,
        },
        {
            initialRouteName: 'OrderHistory',
            defaultNavigationOptions: {
                headerShown: false
            }
        }),
    },
    {
        initialRouteName: 'orderTrackFlow',
        contentComponent: () => <MenuDrawer />
    })
});

export default createAppContainer(AppNavigator);