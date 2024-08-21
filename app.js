import express from 'express';
import { sequelize } from './db/conexion.js';
import './model/personas.js'; // Asegúrate de importar los modelos y sus relaciones
import './model/fabrica.js';

const app = express();
const PORT = 3000;

const conexion = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ force: true });
        console.log('Conexión a la base de datos exitosa');

        app.listen(PORT, () => {
            console.log(`Servidor corriendo en el puerto: http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log(`Error ${error}`);
    }
}
conexion();
