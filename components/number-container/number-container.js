import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { color } from '../../constants/colors';

export default function NumberContainer({children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: color.primary,
    borderBottomWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: {
    color: 'black',
    fontSize: 22
  }
})