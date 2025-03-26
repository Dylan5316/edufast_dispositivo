const db = require('../config/config');
const bcrypt = require('bcryptjs');

const User = {};

// Buscar usuario por num_doc
User.findByNumDoc = (num_doc, result) => {
    const sql = `
        SELECT num_doc, tipo_doc, nombres, apellidos, cel, direccion, correo, rol_id_rol, jornada_id_jornada 
        FROM registro WHERE num_doc = ?
    `;

    db.query(sql, [num_doc], (err, user) => {
        if (err) return result(err, null);
        if (user.length === 0) return result('Usuario no encontrado', null);
        result(null, user[0]);
    });
};

// Buscar usuario por correo
User.findByEmail = (correo, result) => {
    const sql = `
        SELECT num_doc, tipo_doc, nombres, apellidos, cel, direccion, correo, rol_id_rol, jornada_id_jornada, contraseña 
        FROM registro WHERE correo = ?
    `;

    db.query(sql, [correo], (err, user) => {
        if (err) return result(err, null);
        if (user.length === 0) return result('Usuario no encontrado', null);
        result(null, user[0]);
    });
};

// Crear un nuevo usuario
User.create = async (user, result) => {
    // Validar campos obligatorios
    if (!user.num_doc || !user.tipo_doc || !user.nombres || !user.apellidos || !user.cel || !user.direccion || !user.correo || !user.contraseña) {
        return result('Campos obligatorios faltantes', null);
    }

    const hashedPassword = await bcrypt.hash(user.contraseña, 10);

    const sql = `
        INSERT INTO registro (
            num_doc,
            tipo_doc,
            nombres,
            apellidos,
            cel,
            direccion,
            correo,
            contraseña,
            rol_id_rol,
            jornada_id_jornada
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, [
        user.num_doc,
        user.tipo_doc,
        user.nombres,
        user.apellidos,
        user.cel,
        user.direccion,
        user.correo,
        hashedPassword,
        user.rol_id_rol,
        user.jornada_id_jornada
    ], (err, res) => {
        if (err) {
            console.error('Error al crear el usuario: ', err);
            return result(err, null);
        }

        result(null, {
            num_doc: user.num_doc,
            tipo_doc: user.tipo_doc,
            nombres: user.nombres,
            apellidos: user.apellidos,
            cel: user.cel,
            direccion: user.direccion,
            correo: user.correo,
            rol_id_rol: user.rol_id_rol,
            jornada_id_jornada: user.jornada_id_jornada
        });
    });
};

module.exports = User;
