const express = require('express');
const app = express();
const port = 3000; // El puerto en el que se ejecutará el servidor
console.log("inició");
// Ruta GET
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`La aplicación está escuchando en el puerto ${port}`);
});
