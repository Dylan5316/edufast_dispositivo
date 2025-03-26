const User = require('../../models/user'); 
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken'); 
const keys = require('../keys'); 

module.exports = { 
    login(req, res) { 
        const num_doc = req.body.num_doc; 
        const contraseña = req.body.contraseña; 

        User.findByNumDoc(num_doc, async (err, myUser) => { 
            if (err) { 
                return res.status(501).json({ 
                    success: false, 
                    message: 'Error al consultar el usuario', 
                    error: err 
                }); 
            } 

            if (!myUser) { 
                return res.status(401).json({ 
                    success: false, 
                    message: 'El número de documento no existe en la base de datos' 
                }); 
            } 

            const isPasswordValid = await bcrypt.compare(contraseña, myUser.contraseña); 
            if (isPasswordValid) { 
                const token = jwt.sign({ num_doc: myUser.num_doc, correo: myUser.correo }, keys.secretOrKey, { expiresIn: '1h' }); 

                const data = {
                    num_doc: myUser.num_doc,
                    tipo_doc: myUser.tipo_doc,
                    nombres: myUser.nombres,
                    apellidos: myUser.apellidos,
                    cel: myUser.cel,
                    direccion: myUser.direccion,
                    correo: myUser.correo,
                    rol_id_rol: myUser.rol_id_rol,
                    jornada_id_jornada: myUser.jornada_id_jornada,
                    session_token: token 
                }; 
                return res.status(200).json({ 
                    success: true, 
                    message: 'Usuario autenticado', 
                    data: data 
                }); 
            } else { 
                return res.status(401).json({ 
                    success: false, 
                    message: 'Contraseña incorrecta' 
                }); 
            } 
        }); 
    }, 

    register(req, res) { 
        const user = req.body; 
        bcrypt.hash(user.contraseña, 10, (err, hash) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error al encriptar la contraseña',
                    error: err
                });
            }
            user.contraseña = hash;
            User.create(user, (err, data) => { 
                if (err) { 
                    return res.status(501).json({ 
                        success: false, 
                        message: 'Error al crear el usuario', 
                        error: err 
                    }); 
                } 

                return res.status(201).json({ 
                    success: true, 
                    message: 'Usuario creado', 
                    data: data 
                }); 
            }); 
        });
    } 
}
