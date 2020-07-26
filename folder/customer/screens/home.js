import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Modal,
  TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import Card from '../shared/card';
// import ReviewForm from './reviewForm';

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    { title: 'Purina EN Gastroenteric Cat Food 6 lb by Veterinary Diets ', rating: 5, body: 'CatFood', key: '1' },
    { title: 'Purina Friskies Canned Wet Cat Food 40 ct. Variety Packs', rating: 4, body: 'Cat Food', key: '2' },
    { title: 'Purina Fancy Feast Gravy Lovers Poultry & Beef Feast Collection Wet Cat Food Variety Packs', 
    rating: 3, body: 'Cat Food', key: '3' },
    { title: 'Sheba Perfect Portions Cuts in Gravy Wet Cat Food Tray Variety Packs ', rating: 3, body: 'Cat Food', key: '4' },
    { title: 'Purina Friskies Wet Cat Food Variety Pack, Fish-A-Licious Shreds, Prime Filets & Tasty Treasures - (32) 5.5 oz. Cans', 
    rating: 3, body: 'Cat Food', key: '5' },
    { title: 'Purina ONE Tender Selects Blend Adult Dry Cat Food  ', rating: 3, body: 'Cat Food', key: '6' },
    { title: 'Tomlyn Immune Support Daily L-Lysine Supplement, Fish-Flavored Lysine Powder for Cats and Kittens, 3.5oz  ', rating: 3, body: 'Cat Food', key: '7' },
    { title: 'FELIWAY Spray   ', rating: 3, body: 'Cat Food', key: '8' },
    { title: 'Arm & Hammer Cloud Control Platinum Clumping Cat Litter 37lb, Gray    ', rating: 3, body: 'Cat Litter', key: '9' },
    { title: 'Vetoquinol Enisyl-F Oral Paste for Cats  ', rating: 3, body: 'Cat Food', key: '10' },
    // { title: 'Hartz Groomer'  , rating: 3, body: 'Cat Food', key: '11' },
    // { title: 'Grizzly Joint Health Pellet, 3lb   ', rating: 3, body: 'Cat Food', key: '12' },
    // { title: '   ', rating: 3, body: 'Cat Food', key: '13' },
    // { title: 'Fresh Breath by TropiClean Oral Care Water Additive for Pets, 33.8oz - Made in USA   ', rating: 3, body: 'Cat Food', key: '14' },
    // { title: 'Purina Friskies Dry Cat Food, Gravy Swirlers - 22 lb. Bag    ', rating: 3, body: 'Cat Food', key: '15' },
    // { title: 'Purina Friskies Dry Cat Food, Gravy Swirlers - 22 lb. Bag    ', rating: 3, body: 'Cat Food', key: '16' },
    // { title: 'Purina Friskies Dry Cat Food, Gravy Swirlers - 22 lb. Bag    ', rating: 3, body: 'Cat Food', key: '17' },
    // { title: 'Purina Friskies Dry Cat Food, Gravy Swirlers - 22 lb. Bag    ', rating: 3, body: 'Cat Food', key: '18' },
    // { title: 'Purina Friskies Dry Cat Food, Gravy Swirlers - 22 lb. Bag    ', rating: 3, body: 'Cat Food', key: '19' },
    // { title: 'Purina Friskies Dry Cat Food, Gravy Swirlers - 22 lb. Bag    ', rating: 3, body: 'Cat Food', key: '20' },


   
 

  ]);
  

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      
  
      <Modal visible={modalOpen} animationType='slide'>
        {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
          {/* <View style={styles.modalContent}>
            <MaterialIcons 
              name='close'
              size={24} 
              style={{...styles.modalToggle, ...styles.modalClose}} 
              onPress={() => setModalOpen(false)} 
            />
            <ReviewForm addReview={addReview} />
          </View> */}
          
        {/* </TouchableWithoutFeedback> */}
      </Modal>

      <View style={styles.portfolio}>
      {/* <Text style={styles.pet}>Pet Portfolio</Text> */}

      {/* <MaterialIcons 
        name='add' 
        size={24} 
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)} 
                 onPress={() => setModalOpen(true)} 

      /> */}
</View>
<Text style={styles.food}>Cat Food</Text>

      <FlatList data={reviews} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
          <Card>
            <Text style={globalStyles.titleText}>{ item.title }</Text>
          </Card>
        </TouchableOpacity>
      )} />
    

    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
  portfolio:{
    flexDirection:'row',
    fontSize:30,
    
  },
  pet:{
    fontWeight:'bold',
    flexDirection:'row',
    marginTop:10,
    marginLeft:50
  },
  food:{
    fontWeight:'bold',
    fontSize:15,
    textAlign:'center'
  }
});