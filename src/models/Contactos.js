import {DataTypes}  from "sequelize";
import { sequelize } from "../Database/db.js";

 export const Contactos = sequelize.define('contactos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    celular: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    timestamps: false
});

