import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";
import { personas } from "./personas.js";  // Importa personas antes de definir las relaciones

export const fabrica = sequelize.define("Fabricas", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
}, {
    timestamps: false,
});

fabrica.hasMany(personas, { foreignKey: "fabrica_id" });
personas.belongsTo(fabrica, { foreignKey: "fabrica_id" });
