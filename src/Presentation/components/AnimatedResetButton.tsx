import React, { useState } from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';

export const ResetButton = ({ text = 'RESET', onPress }: { text?: string; onPress: () => void }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={onPress}
    >
      <View style={[styles.button, { backgroundColor: isPressed ? '#F4991A' : '#3E3E3E' }]}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
