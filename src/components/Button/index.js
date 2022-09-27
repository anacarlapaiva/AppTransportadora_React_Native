import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const ButtonComponent = ({ labelButton, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.colorText}>
        {labelButton}
      </Text>
    </TouchableOpacity>
  )
};



const styles = StyleSheet.create({
  button: {
    backgroundColor: '#87b8de',
    width: 350,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  colorText: {
    color: "#fff",
    fontSize: 20,
  }
})