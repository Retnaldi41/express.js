const {Router} = require('express');
const router = Router();

const controller = require('./controller')

router.get('/', controller.getAgenda);
router.post('/', controller.insertAgenda);
router.put('/', controller.updateAgenda);
router.delete('/:id', controller.deleteAgenda);
router.get('/:id', controller.getAgendaById);

module.exports = router;