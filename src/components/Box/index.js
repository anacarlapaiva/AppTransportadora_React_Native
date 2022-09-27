import { View, StyleSheet, Text, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';

export const Box = ({ title, description }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.menuTitle}>
          <Text style={styles.title}>{title}</Text>
          <Feather name='navigation' color="white" />
        </View>
        <Text style={styles.colorBody}>{description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    width: '75%',
    backgroundColor: '#a7c6da',
    padding: 15,
    borderRadius: 8,
  },
  content: {

  },
  menuTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorBody: {
    fontSize: 14,
    color: 'white',
  },
  title: {
    color: 'white',
    fontSize: 20,
    marginBottom: 10,
    marginRight: 10,
  }
})
