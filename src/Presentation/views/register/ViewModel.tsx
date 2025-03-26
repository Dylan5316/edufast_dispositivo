import React, { useState } from "react";
import { RegisterAuthUseCase } from "../../../Domain/useCases/auth/RegisterAuth";

const RegisterViewModel = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [values, setValues] = useState({
    num_doc: '',
    tipo_doc: '',
    nombres: '',
    apellidos: '',
    cel: '',
    direccion: '',
    correo: '',
    contraseña: '',
    confirmPassword: '',
    rol_id_rol: 0,            
    jornada_id_jornada: 0
  });

  const tipoDocData = [
    { label: 'Cédula de ciudadanía', value: 'CC' },
    { label: 'Tarjeta de identidad', value: 'TI' },
    { label: 'Cédula de extranjería', value: 'CE' },
    { label: 'Pasaporte', value: 'PAS' },
  ];

  const rolData = [
    { label: 'Administrador', value: 1 },
    { label: 'Coordinador', value: 2 },
    { label: 'Rector', value: 3 },
    { label: 'Secretaria', value: 4 },
    { label: 'Profesor', value: 5 },
    { label: 'Estudiante', value: 6 },
  ];

  const jornadaData = [
    { label: 'Mañana', value: 1 },
    { label: 'Tarde', value: 2 },
  ];

  const onChange = (property: string, value: any) => {
    // Para campos específicos como rol y jornada, convertir a número
    if (property === 'rol_id_rol' || property === 'jornada_id_jornada') {
      setValues({ ...values, [property]: Number(value) });
    } else {
      setValues({ ...values, [property]: value });
    }
  };

  const register = async () => {
    if (isValidForm()) {
      try {
        const response = await RegisterAuthUseCase(values);
        if (response.success) {
          console.log('Usuario registrado', response);
          setSuccessMessage('¡Registrado con éxito, ya puedes ingresar!');
          resetForm()
        } else {
          setErrorMessage('Hubo un problema al registrar el usuario');
        }
      } catch (error) {
        console.error('Error al registrar:', error);
        setErrorMessage('Hubo un error al registrar el usuario. Intente de nuevo.');
      }
    }
  };

  const resetForm = () => {
    setValues({
      num_doc: '',
      tipo_doc: '',
      nombres: '',
      apellidos: '',
      cel: '',
      direccion: '',
      correo: '',
      contraseña: '',
      confirmPassword: '',
      rol_id_rol: 0,
      jornada_id_jornada: 0
    });
    setErrorMessage('');
    setSuccessMessage('');
  };

  const isValidForm = (): boolean => {
    if (!values.num_doc) {
      setErrorMessage('El número de documento es requerido');
      return false;
    }
    if (!values.tipo_doc) {
      setErrorMessage('El tipo de documento es requerido');
      return false;
    }
    if (!values.nombres) {
      setErrorMessage('Los nombres son requeridos');
      return false;
    }
    if (!values.apellidos) {
      setErrorMessage('Los apellidos son requeridos');
      return false;
    }
    if (!values.cel) {
      setErrorMessage('El celular es requerido');
      return false;
    }
    if (!values.correo || !isValidEmail(values.correo)) {
      setErrorMessage('El correo electrónico es requerido y debe ser válido');
      return false;
    }
    if (!values.contraseña) {
      setErrorMessage('La contraseña es requerida');
      return false;
    }
    if (!values.confirmPassword) {
      setErrorMessage('La confirmación de la contraseña es requerida');
      return false;
    }
    if (values.contraseña !== values.confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden');
      return false;
    }
    if (values.rol_id_rol === 0) {
      setErrorMessage('Debes seleccionar un rol');
      return false;
    }
    if (values.jornada_id_jornada === 0) {
      setErrorMessage('Debes seleccionar una jornada');
      return false;
    }

    setErrorMessage('');
    return true;
  };

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  return {
    ...values,
    tipoDocData,
    rolData,
    jornadaData,
    onChange,
    register,
    resetForm,
    successMessage,
    errorMessage,
  };
};

export default RegisterViewModel;
