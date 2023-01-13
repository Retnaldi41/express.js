const {Router} = require('express');
const router = Router();

const controller = require('./controller')

router.get('/', controller.getPotrait);
router.post('/', controller.insertPotrait);
router.put('/:id', controller.updatePotrait);
router.delete('/:id', controller.deletePotrait);
router.get('/:id', controller.getPotraitById);

module.exports = router;