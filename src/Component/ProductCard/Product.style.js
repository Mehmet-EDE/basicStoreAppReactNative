import { StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container:{
    backgroundColor: '#2c313c',
  padding: 5,
  margin: 10,
  borderRadius: 3,
  shadowColor: "#1e304b",
  shadowOffset: {
   width: 0,
   height: 5,
  },
  shadowOpacity: 0.36,
  shadowRadius: 6.68,
  elevation: 11,
  width:windowWidth/2.5
  },
  img: {
    margin:2,
    height: windowWidth / 2,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
   },
   title: {
    margin: 3,
    fontWeight: '900',
    fontSize: 20,
    color:'white',
    fontWeight:'900'
   },
   price: {
     color:'white',
     fontWeight:'400'
   },
   subContainer: {
    padding: 5
   },
   author:{
     color:'red',
    fontStyle:'Bold',
    fontSize:20,
    textDecorationLine:'underline',
   }
})