const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const {
  getAllBreeds,
  getBreed,
  createBreed,
  getTemperaments,
  getTemperamentById,
} = require('../controllers/breeds.controller');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/breeds', getAllBreeds);
router.get('/breed/:id', getBreed);
router.post('/breeds', createBreed);
router.get('/temperaments', getTemperaments);
router.get('/temperament/:id', getTemperamentById);

module.exports = router;
