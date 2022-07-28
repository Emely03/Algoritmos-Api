const {Router} = require ("express")
const router = Router();
const apiRoute = '/api'
const notasControllers = require('../controllers/notas');

//router.get(apiRoute+'/notas',notasControllers.getAll)
router.post(apiRoute+'/notas',notasControllers.create)

module.exports = router;