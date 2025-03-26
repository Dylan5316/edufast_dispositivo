import React, { useState, useEffect } from 'react' 
import { useNavigation } from '@react-navigation/native'; 
import { View, Text, Image, TextInput, StyleSheet, ToastAndroid, 
TouchableOpacity } from 'react-native' 
import { RoundedButton } from 
'../../../Presentation/components/RoundedButton'; 
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack'; 
import { RootStackParamList } from '../../../../App'; 
import useViewModel from './ViewModel'; 
import { CustomTextInput } from '../../components/CusatomTextInput'; 
import styles from './Styles'; 
 
interface Props extends StackScreenProps<RootStackParamList, 
'HomeScreen'>{}; 
 
export const HomeScreen = ({navigation, route}: Props) => { 
 
    const { num_doc, password, errorMessage, user,  onChange, login } = 
useViewModel(); 
 
    //const navigation = 
useNavigation<StackNavigationProp<RootStackParamList>>(); 
 
    useEffect(() => { 
        if (errorMessage !== '') { 
            ToastAndroid.show(errorMessage, ToastAndroid.LONG); 
        } 
    }, [errorMessage]); 
 
    useEffect(() => { 
        if (user?.num_doc !== null && user?.num_doc !== undefined) { 
            navigation.replace('ProfileInfoScreen'); 
        } 
    }, [user]); 
 
    return ( 
        <View style={styles.container}> 
            <Image 
                source={require('../../../../assets/chef.png')} 
                style={styles.imageBackground} 
            /> 
            <View style={styles.logoContainer}> 
                <Image 
                    source={require('../../../../assets/logo.png')} 
                    style={styles.logoImage} 
                /> 
                <Text style={styles.logoText}>EDUFAST</Text> 
            </View> 
            <View style={styles.form}> 
                <Text style={styles.formText}>INGRESAR</Text> 
 
                <CustomTextInput 
                    image={require('../../../../assets/id_card.png')} 
                    placeholder='Numero de documento' 
                    value={num_doc} 
                    keyboardType='default' 
                    property='num_doc' 
                    onChangeText={onChange} 
                /> 
 
                <CustomTextInput 
                    image={require('../../../../assets/password.png')} 
                    placeholder='Contraseña' 
                    value={password} 
                    keyboardType='default' 
                    secureTextEntry={true} 
                    property='password' 
                    onChangeText={onChange} 
                /> 
                <View style={{ marginTop: 30 }}> 
                    <RoundedButton text='ENTRAR' onPress={() => login()} /> 
                </View> 
 
                <View style={styles.formRegister}> 
                    <Text>¿No tienes cuenta?</Text> 
                    <TouchableOpacity onPress={() => 
navigation.navigate('RegisterScreen')}> 
                        <Text 
style={styles.formRegisterText}>Registrate</Text> 
                    </TouchableOpacity> 
                </View> 
 
            </View> 
 
        </View> 
    ); 
}