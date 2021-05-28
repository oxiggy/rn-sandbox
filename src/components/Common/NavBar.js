import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const NavBar = ({ title }) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#333',
    paddingBottom: 10
  },
  title: {
    color: 'white',
    fontSize: 20
  }
})