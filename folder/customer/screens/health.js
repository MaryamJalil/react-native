import React from 'react';
import { StyleSheet, Button, TextInput, View, Text,Image,ScrollView } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { AntDesign } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { Button } from 'react-native-elements';



export default function Health() {

  return (
    // <View style={styles.im}>
    <ScrollView>

 <View >
     <Image source={require('./images/kit.jpg')} style={styles.pic}/>
     <Text style={styles.txt}> Care Essential</Text>

     <View style={styles.container}>

      <Image source={require('./images/diagnose.png')} style={ styles.healthimg}/>
      <Text style={styles.txt}>Pet Diagnostic Lab</Text>
      <Text>We have Fully equipped diagnostic laboratory service</Text>
      </View>

      <View style={styles.container}>
      <Image source={require('./images/vaccine.png')} style={ styles.healthimg}/>
      <Text style={styles.txt}>Pets Vaccinations</Text>
      <Text>Petsworld Pet Clinic provide low cost pet vaccinations for your.</Text>
      </View>

      <View style={styles.container}>
      <Image source={require('./images/surgury.png')} style={ styles.healthimg}/>
      <Text style={styles.txt}>Pets Surgery</Text>
      <Text>Surgery is a tried-and-true form of veterinary care, not only for alleviating</Text>
      </View>

      <View style={styles.container}>
     <Image source={require('./images/ultrasound.png')} style={ styles.healthimg}/>
      <Text style={styles.txt}>Pet Ultrasound</Text>
      <Text>Veterinary ultrasonography, also known as an ultrasound test for your pet</Text>
      </View>
      
      <View style={styles.container}>
     <Image source={require('./images/checkup.png')} style={ styles.healthimg}/>
      <Text style={styles.txt}>Pet Health Checkup & Treatments</Text>
      <Text>We provide services for the health problems of birds, fish and exotic</Text>
      </View>

     
      </View>
      <TouchableOpacity>
      <View style={styles.btn1}> 
     <Button   title="Make Apointment" color="#212121"
 /> 
 </View>
 </TouchableOpacity>
      </ScrollView>
  
    
  );
}
const styles=StyleSheet.create({
  container:{
   padding:40,
   alignContent:'center',
   justifyContent:'center',
   alignItems:'center'
  },
  healthimg:{
height:250,
width:250
  },
  im:{
// flexDirection:'row',
alignItems:'center',
marginTop:40,

  },
  pic:{
   flexDirection:'row',
   height:300,
   width:500
  },
  bt:{
    backgroundColor:"#000000",
    color:"#ffffff",
    alignItems:'center',
    alignContent:'center',
    padding:10,
  
    justifyContent: 'center',
    marginHorizontal: 16,
    marginTop:100

  },
  txt:{
    fontWeight:'bold',
    fontSize:30,
    padding:10,
    alignItems:"center",
    justifyContent:"center",
  //  borderRadius:1,
  //  borderWidth:3,
   borderColor:'#000000',
   marginVertical: 12,
    borderBottomWidth:1,
    borderBottomColor:"#000000",
    flexDirection:'row'

  },
  btn1:{
    padding:10,
    marginTop:10,
    marginBottom:10,
    // flexDirection:'row',
    alignItems:'center'

  }
  

})