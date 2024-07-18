import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const MyButton = ({tittle}) => {
  return (
    <View>
      
      <TouchableOpacity activeOpacity={0.5} 
        style={styles.button }>
        <Text style={styles.text}>{ tittle}</Text>
      </TouchableOpacity>
      
     </View>
  )
}

const styles = StyleSheet.create({
  button: {
  
    backgroundColor: "orange",
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius:15
  },
  text: {
    fontSize: 15,
    color: 'white',
    fontWeight: '600'
  }
})


export default MyButton