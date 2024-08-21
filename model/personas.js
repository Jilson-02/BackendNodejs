import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";

export const personas = sequelize.define("Personas", {
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    Nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    fabrica_id: {  // Cambiado de 'categoria_id' a 'fabrica_id'
        type: DataTypes.INTEGER,
        references: {
            model: 'Fabricas', // Nombre de la tabla
            key: 'id',
        },
    },
}, {
    timestamps: false
});
