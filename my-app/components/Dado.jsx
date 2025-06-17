import React, { useState } from 'react';
import { Pressable, StyleSheet, View, Image } from 'react-native';

const getNumeroInicial = () => Math.floor(Math.random() * 6) + 1;

const puntosDado = [
  require('../assets/Dice1.jpg'),
  require('../assets/Dice2.jpg'),
  require('../assets/Dice3.jpg'),
  require('../assets/Dice4.jpg'),
  require('../assets/Dice5.jpg'),
  require('../assets/Dice6.jpg')
];

export default function Dice() {
  const [diceNumber, setDiceNumber] = useState(getNumeroInicial());
  const [pressed, setPressed] = useState(false);

  const rollDice = () => {
    setDiceNumber(getNumeroInicial());
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={rollDice}
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}
      >
        <View style={[styles.dice, pressed && styles.dicePressed]}>
          <Image
            source={puntosDado[diceNumber - 1]}
            style={styles.image}
            resizeMode="contain"
          />
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
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  dicePressed: {
    backgroundColor: '#e3f2fd',
  },
  image: {
    width: 100,
      height: 100,
  },
});