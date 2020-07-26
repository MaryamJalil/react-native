import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { AntDesign } from '@expo/vector-icons'; 



export default function Login() {

  return (
    
    <View style={globalStyles.container}>
     
    
          <View>
              <Text style={styles.logintxt}>Login</Text>
              <View  style={styles.antstyle}>
              <AntDesign name="user" size={50} color="black"

               />
               </View>

              <Text style={styles.txtinput}>Email:</Text>
            <TextInput 
              style={globalStyles.input}
              placeholder='Email'
             
           
            />
            <Text style={styles.txtinput}>Password:</Text>

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
    
  );
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