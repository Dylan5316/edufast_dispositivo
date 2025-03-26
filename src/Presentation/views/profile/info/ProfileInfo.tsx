import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RootStackParamList } from '../../../../../App';
import useViewModel from './ViewModel';
import { RoundedButton } from '../../../components/RoundedButton';
import { MyColors } from '../../../theme/AppTheme';


interface Props extends StackScreenProps<RootStackParamList, 'ProfileInfoScreen'> {}

export const ProfileInfoScreen = ({ navigation }: Props) => {
  const { user, removeSession } = useViewModel();

  return (
    <View style={styles.container}>
      <Text style={styles.h1title}>¡Hola, <Text style={styles.title}>{user?.nombres || 'Usuario'}! 👋</Text></Text>
      <Text style={styles.subtitle}>
        Bienvenid@ a tu perfil, nos encanta tenerte aquí.
      </Text>

      <View style={styles.buttonContainer}>
        <RoundedButton
          text="Cerrar sesión"
          onPress={() => {
            removeSession();
            navigation.navigate('HomeScreen');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    color: MyColors.primary,
    marginBottom: 28,
    textAlign: 'center',
    marginRight:0,
  },
  h1title: {
    fontSize: 26,
    fontWeight: '600',
    color: '#AAAAAA',
    textAlign: 'center',
    marginBottom: 28,
    marginRight:0,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 40,
    textAlign: 'center',
    lineHeight: 22,
  },
  buttonContainer: {
    width: '100%',
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
});
