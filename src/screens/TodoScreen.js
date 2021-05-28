import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export const TodoScreen = ({ goBack, item }) => {
  return (
    <View>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title='Назад' onPress={goBack} color='#757575' />
        </View>
      </View>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    width: '40%'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 32
  }
})
