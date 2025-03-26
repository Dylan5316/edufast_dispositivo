import React, { useEffect } from 'react';
import { View, Text, Image, ScrollView, ToastAndroid } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import useViewModel from './ViewModel';
import { CustomTextInput } from '../../components/CusatomTextInput';
import styles from './Styles';
import { Dropdown } from 'react-native-element-dropdown';

export const RegisterScreen = () => {
  const {
    num_doc,
    tipo_doc,
    nombres,
    apellidos,
    cel,
    direccion,
    correo,
    contraseña,
    confirmPassword,
    rol_id_rol,
    jornada_id_jornada,
    successMessage,
    errorMessage,
    tipoDocData,
    rolData,
    jornadaData,
    resetForm,
    onChange,
    register
  } = useViewModel();


  useEffect(() => {
    if (errorMessage !== '') {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (successMessage !== '') {
      ToastAndroid.show(successMessage, ToastAndroid.LONG);
    }
  }, [successMessage]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/prueba.png')}
        style={styles.imageBackground}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../../assets/user_image.png')}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>SELECCIONA UNA IMAGEN</Text>
      </View>

      <View style={styles.form}>
        <ScrollView>
          <Text style={styles.formText}>REGISTRARSE</Text>

          <CustomTextInput
            image={require('../../../../assets/id_card.png')}
            placeholder="Número de documento"
            value={num_doc}
            keyboardType="numeric"
            property="num_doc"
            onChangeText={onChange}
          />

<Dropdown
  data={tipoDocData}
  labelField="label"
  valueField="value"
  placeholder="Seleccione un tipo de documento"
  value={tipo_doc}
  onChange={item => onChange('tipo_doc', item.value)}
  style={[styles.dropdown, { borderRadius: 26 }]}
  placeholderStyle={styles.placeholderStyle}
  selectedTextStyle={styles.selectedTextStyle}
/>

          <CustomTextInput
            image={require('../../../../assets/user.png')}
            placeholder="Nombres"
            value={nombres}
            keyboardType="default"
            property="nombres"
            onChangeText={onChange}
          />

          <CustomTextInput
            image={require('../../../../assets/my_user.png')}
            placeholder="Apellidos"
            value={apellidos}
            keyboardType="default"
            property="apellidos"
            onChangeText={onChange}
          />

          <CustomTextInput
            image={require('../../../../assets/phone.png')}
            placeholder="Celular"
            value={cel}
            keyboardType="numeric"
            property="cel"
            onChangeText={onChange}
          />

          <CustomTextInput
            image={require('../../../../assets/address.png')}
            placeholder="Dirección"
            value={direccion}
            keyboardType="default"
            property="direccion"
            onChangeText={onChange}
          />

          <CustomTextInput
            image={require('../../../../assets/email.png')}
            placeholder="Correo electrónico"
            value={correo}
            keyboardType="email-address"
            property="correo"
            onChangeText={onChange}
          />

          <CustomTextInput
            image={require('../../../../assets/password.png')}
            placeholder="Contraseña"
            value={contraseña}
            keyboardType="default"
            secureTextEntry={true}
            property="contraseña"
            onChangeText={onChange}
          />
            <CustomTextInput
            image={require('../../../../assets/password.png')}
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            keyboardType="default"
            secureTextEntry={true}
            property="confirmPassword"
            onChangeText={onChange}
          />
  
<Dropdown
  data={rolData}
  labelField="label"
  valueField="value"
  placeholder="Seleccione un rol"
  value={rol_id_rol}
  onChange={item => onChange('rol_id_rol', item.value)}
  style={[styles.dropdown, { borderRadius: 20 }]}
  placeholderStyle={styles.placeholderStyle}
  selectedTextStyle={styles.selectedTextStyle}
/>

<Dropdown
  data={jornadaData}
  labelField="label"
  valueField="value"
  placeholder="Seleccione una jornada"
  value={jornada_id_jornada}
  onChange={item => onChange('jornada_id_jornada', item.value)}
  style={[styles.dropdown, { borderRadius: 20 }]}
  placeholderStyle={styles.placeholderStyle}
  selectedTextStyle={styles.selectedTextStyle}
/>

          <View style={{ marginTop: 30 }}>
            <RoundedButton text="BORRAR" onPress={() => resetForm()} />
          </View>

          <View style={{ marginTop: 18 }}>
            <RoundedButton text="GUARDAR" onPress={() => register()} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
