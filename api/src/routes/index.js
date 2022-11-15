const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// RUTAS A UTILIZAR
// http:localhost:3001
// https://api.thedogapi.com/v1/breeds
// https://api.thedogapi.com/v1/breeds?name="..."
// https://api.thedogapi.com/v1/breeds/search?q={raza_perro}
// https://api.thedogapi.com/v1/temperaments

//

// RUTAS A REALIZAR
// * GET/dogs
// * GET/dogs?name="..."
// * GET /dogs/{idRaza}
// * GET /temperaments
// *  POST /dogs

module.exports = router;
