// import React from 'react';
// import { StyleSheet, View, Text } from 'react-native';
// import { globalStyles } from '../styles/global';

// export default function DoctorDetails() {
//   return (
//     <View style={globalStyles.container}>
//       <Text>About Screen</Text>
//     </View>
//   );
// }



import React, { Component } from "react";

import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';



export default class Dashboard extends Component{
    render(){
        return(
           <View>
             <Text>About</Text>
           </View>
        )
    }
}
