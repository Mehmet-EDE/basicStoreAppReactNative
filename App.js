import React from 'react'
import { View, Text, FlatList, Dimensions, StyleSheet, TextInput } from 'react-native'
import Product from './product.json'
import ProductCard from './src/Component/ProductCard'

function App() {
  const renderProducts = ({ item }) => <ProductCard items={item} />
  return (
    <View style={styles.container}>
      <Text style={styles.title}>EdeStore</Text>
      <FlatList
        data={Product}
        ListHeaderComponent={() => <TextInput style={styles.tInput}
          placeholder="Search Here"
          keyboardType="default" />}
        numColumns={2}
        initialNumToRender={5}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProducts} />
    </View>
  )
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({

  container: {
    backgroundColor: '#3b434d',
    width: windowWidth / 1
  },
  title: {
    fontWeight: '900',
    margin:3,
    fontSize: 32,
    color: 'white',
    textDecorationLine: 'underline'
  },
  tInput: {
    backgroundColor: '#59637a',
    margin: 5,
    borderRadius: 5,
  },
})
export default App