import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDo List</Text>
    </View>
  );
}
//Stilovi za naslov
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 50,
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: "#dec509",
      textShadowColor: "black", //Obrub
      textShadowOffset: {width: -1, height: 1}, //Offset za sjenu
      textShadowRadius: 2, //Raspršenje sjene
    },
});