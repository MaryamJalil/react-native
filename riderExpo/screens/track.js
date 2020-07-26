// import React, { Component } from 'react';
// import { AppRegistry, StyleSheet, View, Dimensions } from 'react-native';
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
// //import RetroMapStyles from './MapStyles/RetroMapStyles.json';
// let { width, height } = Dimensions.get('window');
// const ASPECT_RATIO = width / height;
// const LATITUDE = 0;
// const LONGITUDE = 0;
// const LATITUDE_DELTA = 0.0922;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

// export default class MapExample extends Component {  
//     constructor() {
//     super();    
//     this.state = {
//       region: {
//         latitude: LATITUDE,
//         longitude: LONGITUDE,
//         latitudeDelta: LATITUDE_DELTA,
//         longitudeDelta: LONGITUDE_DELTA,
//       }
//     };
//   }  
//   componentDidMount() {
//     navigator.geolocation.getCurrentPosition(
//       position => {
//         this.setState({
//           region: {
//             latitude: position.coords.latitude,
//             longitude: position.coords.longitude,
//             latitudeDelta: LATITUDE_DELTA,
//             longitudeDelta: LONGITUDE_DELTA,
//           }
//         });
//       },
//     (error) => console.log(error.message),
//     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
//     );
//     this.watchID = navigator.geolocation.watchPosition(
//       position => {
//         this.setState({
//           region: {
//             latitude: position.coords.latitude,
//             longitude: position.coords.longitude,
//             latitudeDelta: LATITUDE_DELTA,
//             longitudeDelta: LONGITUDE_DELTA,
//           }
//         });
//       }
//     );
//   }  
//   componentWillUnmount() {
//     navigator.geolocation.clearWatch(this.watchID);
//   }  
//   render() {
//     return (
//       <MapView
//         provider={ PROVIDER_GOOGLE }
//         style={ styles.container }
//         //customMapStyle={ RetroMapStyles }
//         showsUserLocation={ true }
//         region={ this.state.region }
//         onRegionChange={ region => this.setState({region}) }
//         onRegionChangeComplete={ region => this.setState({region}) }
//       >
//         <MapView.Marker
//           coordinate={ this.state.region }
//         />
//       </MapView>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     height: '100%',
//     width: '100%',
//   }
// })

// // import React from 'react';
// // import { StyleSheet, Text, View , TextInput} from 'react-native';
// // import MapView, {Marker, PROVIDER_GOOGLE}  from 'react-native-maps';
 
// // export default class App extends React.Component {
// //   onRegionChange(region) {
// //     this.setState({ region });
// //   }
// //   render() {
// //     var mapStyle=[];
// //     return (
// //    <View style={styles.container}>
// //         <MapView
// //           provider={PROVIDER_GOOGLE}
// //           style={styles.map}
// //           initialRegion={{
// //             latitude: 37.78825,
// //             longitude: -122.4324,
// //             latitudeDelta: 0.0922,
// //             longitudeDelta: 0.0421,
// //           }}
// //           showsUserLocation
// //           customMapStyle={mapStyle}
// //         >
// //           <Marker
// //             draggable
// //             coordinate={{
// //               latitude: 37.78825,
// //               longitude: -122.4324,
// //             }}
// //             onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
// //             title={'Test Marker'}
// //             description={'This is a description of the marker'}
// //           />
// //         </MapView>
// //       </View>
// //     );
// //   }
// // }
 
// // const styles = StyleSheet.create({
// //   container: {
// //     position:'absolute',
// //     top:0,
// //     left:0,
// //     right:0,
// //     bottom:0,
// //     alignItems: 'center',
// //     justifyContent: 'flex-end',
// //   },
// //   map: {
// //     position:'absolute',
// //     top:0,
// //     left:0,
// //     right:0,
// //     bottom:0,
// //     flex:1
// //   },
// // });

import React, { Component } from "react";
import { AppRegistry, StyleSheet, Dimensions, Image, View, StatusBar, TouchableOpacity, Text, PermissionsAndroid } from "react-native";
//import { Container, Text } from "native-base";
import MapView from 'react-native-maps';
import Polyline from '@mapbox/polyline';
import { Container, Header, Left, Icon, Body, Right, Content } from "native-base";
import { Button ,TextInput} from 'react-native-paper';
import PubNub from 'pubnub';
import Geolocation from 'react-native-geolocation-service';

const pubnub = new PubNub({
  subscribeKey: "sub-c-44dc460e-6f61-11ea-bbe3-3ec3e5ef3302",
  publishKey: "pub-c-6dbdc9ba-d87d-4e15-813c-1e6a76fe12bd",
  uuid: "myUUIDv"
});

class LocationA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: 33.56425599439081,
      longitude: 73.12568990766728,
      error: null,
      concat: null,
      coords:[],
      x: 'false',
      cordLatitude:33.720000,
      cordLongitude:73.060000,
    };

    this.mergeLot = this.mergeLot.bind(this);

  }

  componentDidMount() {
    this.watchID = navigator.geolocation.watchPosition(
       (position) => {
         this.setState({
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
           error: null,
         });
         this.mergeLot();
       },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: true, timeout: 20000, maximumAge: 100, distanceFilter: 0 },
     );

   }
   
   componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

//   componentDidMount() {
   
//         Geolocation.getCurrentPosition(
//             (position) => {
//                 console.log(position);
//             },
//             (error) => {
//                 // See error code charts below.
//                 console.log(error.code, error.message);
//             },
//             { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000, distanceFilter: 0 }
//         );
    
// }

   componentDidUpdate(prevProps, prevState) {
   
    if (this.state.latitude !== prevState.latitude) {
      pubnub.publish({
        message: {
          latitude: this.state.latitude,
          longitude: this.state.longitude,
        },
        channel: 'location',
      });
    }
  } 

  //  componentWillUnmount(){
  //    Geolocation.getCurrentPosition;
  //  }

  mergeLot(){
    if (this.state.latitude != null && this.state.longitude!=null)
     {
       let concatLot = this.state.latitude +","+this.state.longitude
       this.setState({
         concat: concatLot
       }, () => {
         this.getDirections(concatLot, "33.720000,73.060000", "AIzaSyD-2KnDs0lN_0Z293JcYo9pDFF280_819k");
       });
     }

   }

   async getDirections(startLoc, destinationLoc, API) {

         try {
          // var proxy_url = 'https://cors-anywhere.herokuapp.com/';
          // var target_url = 'https://maps.googleapis.com/maps/api/directions/json?origin=${ startLoc }&destination=${ destinationLoc }';
          // var google_api_key = '&key=${ API }'
          // let resp = await fetch(`${proxy_url}${target_url}${google_api_key}`)   
           let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${ startLoc }&destination=${ destinationLoc }&key=${ API }`)
             let respJson = await resp.json();
             console.log(respJson)
             let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
             let coords = points.map((point, index) => {
                 return  {
                     latitude : point[0],
                     longitude : point[1]
                 }
             })
             this.setState({coords: coords})
             this.setState({x: "true"})
             return coords
         } catch(error) {
           console.log('Error', error)
             this.setState({x: "error"})
             return error
         }
     }

     change(){
      // this.props.navigation.navigate("Invoice")
     }

  render() {

    return (
      <Container style={{backgroundColor:''}}>
        <Header style={{backgroundColor:'#8E0438'}}>
        <StatusBar backgroundColor='#8E0438' barStyle="light-content" />
        <Left>
              <Icon name='arrow-back' style={{color:'white'}} onPress={()=>this.props.navigation.goBack()}/>
          </Left>
          <Body>
            <Text style={{fontSize:20, color:'white'}}>Track</Text>
          </Body>
          <Right/>
        </Header>
        <View style={{flex:1}}>
      <MapView 
      style={styles.map} 
      initialRegion={{
       latitude:this.state.latitude,
       longitude:this.state.longitude,
       latitudeDelta: 0.0005,
       longitudeDelta: 0.005
      }}
      showsUserLocation={ true }
//         region={ this.state.region }
//         onRegionChange={ region => this.setState({region}) }
//         onRegionChangeComplete={ region => this.setState({region}) }
      >

      {!!this.state.latitude && !!this.state.longitude && <MapView.Marker
         coordinate={{"latitude":this.state.latitude,"longitude":this.state.longitude}}
         title={"Your Location"}
       />}

       {!!this.state.cordLatitude && !!this.state.cordLongitude && <MapView.Marker
          coordinate={{"latitude":this.state.cordLatitude,"longitude":this.state.cordLongitude}}
          title={"Your Destination"}
        />}

       {!!this.state.latitude && !!this.state.longitude && this.state.x == 'true' && <MapView.Polyline
            coordinates={this.state.coords}
            strokeWidth={2}
            strokeColor="red"/>
        }

        {!!this.state.latitude && !!this.state.longitude && this.state.x == 'error' && <MapView.Polyline
          coordinates={[
              {latitude: this.state.latitude, longitude: this.state.longitude},
              {latitude: this.state.cordLatitude, longitude: this.state.cordLongitude},
          ]}
          strokeWidth={2}
          strokeColor="red"/>
         }
      </MapView>
      </View>
     <View>
      <Button
        mode="contained"
        style={{marginLeft:18, marginRight:18, marginBottom:10, backgroundColor:'#8E0438'}}
       //onPress={() => sendCred(props)}
       onPress={this.change()}
       >
        End Ride
      </Button>
      </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default LocationA;