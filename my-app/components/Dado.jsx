import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const getNumeroInicial = () => Math.floor(Math.random() * 6) + 1;

export default function Dice() {
  const [diceNumber, setDiceNumber] = useState(getNumeroInicial());

  const rollDice = () => {
    setDiceNumber(getNumeroInicial());
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={rollDice}>
        <View style={styles.dice}>
          <Text style={styles.Text}>{diceNumber}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dice: {
    width: 120,
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});