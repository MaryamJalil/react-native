import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  errorText: {
    color: 'crimson',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 6,
    textAlign: 'center',
  },
  petimage:{
    padding:10,
    alignItems:"center",
   borderRadius:1,
   borderWidth:3,
   borderColor:'#000000',
   marginVertical: 12,

 

  },
  petcontainer: {
    flex: 1,
    padding: 30,
  },
  imageview:{
    padding:30,
    marginTop: 12,
    marginBottom:12

  },
  imagebutton:{
    padding:10,
    // flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  }

});

export const images = {
  ratings: {
    '1': require('../assets/rating-1.png'),
    '2': require('../assets/rating-2.png'),
    '3': require('../assets/rating-3.png'),
    '4': require('../assets/rating-4.png'),
    '5': require('../assets/rating-5.png'),
  }
};