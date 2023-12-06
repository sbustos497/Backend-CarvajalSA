import { where } from 'sequelize';
import { Contactos } from '../models/Contactos.js';

export const getContactos = async (req, res) => {

    try {
        const contactos = await Contactos.findAll();
        res.json(contactos);
    }
    catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }

};

export const postContacto = async (req, res) => {

    const { nombre, apellido, telefono, celular, correo, direccion } = req.body;

    try {
        const newContacto = await Contactos.create({
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
            celular: celular,
            correo: correo,
            direccion: direccion
        })
        console.log(newContacto);
        res.json(newContacto)
    }
    catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

export const getContactoById = async (req, res) => {

    try {
        const contacto = await Contactos.findByPk(req.params.id);
        res.json(contacto);
    }
    catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }




};

export const deleteContacto = async (req, res) => {

    try {
        await Contactos.destroy({
            where: {
                id: req.params.id
            }
        });

        res.sendStatus(204);
    }
    catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

export const putContacto = async (req, res) => {

    const { nombre, apellido, telefono, celular, correo, direccion } = req.body;

    try {
        const contacto = await Contactos.findByPk(req.params.id);
        contacto.nombre = nombre;
        contacto.apellido = apellido;
        contacto.telefono = telefono;
        contacto.celular = celular;
        contacto.correo = correo;
        contacto.direccion = direccion;

        await contacto.save();
        res.json(contacto);
    }
    catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }

};
