
import React, { Component } from "react";

import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { AntDesign } from '@expo/vector-icons'; 



export default class PetPortfolio extends Component{
    render(){
        return(
            <View style={globalStyles.container}>
     
    
          <View>
              <Text style={styles.logintxt}>Make your Pet Portfolio</Text>


              <Text style={styles.txtinput}>Name:</Text>
            <TextInput 
              style={globalStyles.input}
              placeholder='Email'
             
           
            />
            <Text style={styles.txtinput}>Age:</Text>

            <TextInput
              style={globalStyles.input}
              placeholder='Password'
          
            />
            <Text style={styles.txtinput}>Pet Category:</Text>

<TextInput
  style={globalStyles.input}
  placeholder='Password'

/>

<Text style={styles.txtinput}>Breed:</Text>

<TextInput
  style={globalStyles.input}
  placeholder='Password'

/>
<Text style={styles.txtinput}>Insert Image:</Text>

<TextInput
  style={globalStyles.input}
  placeholder='Password'

/>
            <View   style={styles.txtbtn}>

            <Button
          title="Submit"
          color="#212121"
      

        />
        </View>
         
          </View>
        
    </View>
    
        )
    }
}
const styles=StyleSheet.create({
    logintxt:{
        fontWeight:"bold",
        fontSize:20,
        textAlign:"center"

    },
    txtinput:{

      marginBottom:10,
      padding:10,
      flexDirection:'row'
    },
    txtbtn:{
      padding:10,
      marginTop:10,
      marginBottom:10,
      // flexDirection:'row',
      alignItems:'center'

    },
    antstyle:{
      alignItems:'center',
      marginTop:30
    }




})