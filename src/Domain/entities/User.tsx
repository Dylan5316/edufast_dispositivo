export interface User {
    num_doc?: string;
    tipo_doc: string;
    nombres: string;
    apellidos: string;
    cel: string;
    direccion: string;
    correo: string;
    contraseña: string;
    confirmPassword: string;
    rol_id_rol: number;
    jornada_id_jornada: number;
    session_token?: string;
  }
  