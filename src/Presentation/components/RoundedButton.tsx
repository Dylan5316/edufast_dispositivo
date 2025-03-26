import React, { useRef } from 'react';
import { TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';
import { MyColors } from '../theme/AppTheme';

interface Props {
  text: string;
  onPress: () => void;
}

export const RoundedButton = ({ text, onPress }: Props) => {
  const translateY = useRef(new Animated.Value(0)).current; // Valor inicial en posición normal

  const handlePressIn = () => {
    Animated.spring(translateY, {
      toValue: -4, // Eleva el botón 5 píxeles hacia arriba
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(translateY, {
      toValue: 2, // Regresa el botón a su posición original
      useNativeDriver: true,
    }).start();
    onPress(); // Ejecuta la acción del botón
  };

  return (
    <Animated.View style={{ transform: [{ translateY }] }}>
      <TouchableOpacity
        style={styles.RoundedButton}
        onPressIn={handlePressIn} // Inicia la animación al presionar
        onPressOut={handlePressOut} // Finaliza la animación al soltar
      >
        <Text style={styles.textButton}>{text}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  RoundedButton: {
    width: '100%',
    height: 50,
    backgroundColor: MyColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 20,
    shadowRadius: 4.65,
    elevation: 4,
  },
  textButton: {
    color: 'white',
  },
});
