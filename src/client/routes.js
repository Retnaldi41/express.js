const {Router} = require('express');
const router = Router();

const controller = require('./controller')

router.get('/', controller.getClient);
router.post('/', controller.insertClient);
router.put('/:id', controller.updateClient);
router.delete('/:id', controller.deleteClient);
router.get('/:id', controller.getClientById);

module.exports = router;