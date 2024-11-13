const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
  try {
    // Ruta al archivo JSON dentro del proyecto
    const filePath = path.join(__dirname, 'privacyPolicy-data.json');
    
    // Leer el archivo y devolverlo como JSON
    const data = fs.readFileSync(filePath, 'utf8');
    
    // Responder con el JSON de datos
    return {
      statusCode: 200,
      body: data,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Permite acceso desde cualquier origen
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET'
      }
    };
  } catch (error) {
    console.error('Error al leer el archivo JSON', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error al obtener los datos' }),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Agrega esta línea también aquí
      },
    };
  }
};
