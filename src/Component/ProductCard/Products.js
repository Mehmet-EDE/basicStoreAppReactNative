import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './Product.style'

function Products({ items }) {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{
        uri: items.imgURL
      }} />
      <View style={styles.subContainer}>
        <Text style={styles.title} >{items.title}</Text>
        <Text style={styles.price} >{items.price}</Text>
        {
          !items.inStock && <Text style={styles.author} >Stokta Yok</Text>
        }
      </View>
    </View>
  )
}

export default Products