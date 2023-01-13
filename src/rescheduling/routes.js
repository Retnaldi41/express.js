const {Router} = require('express');
const router = Router();

const controller = require('./controller')

router.get('/', controller.getRescheduling);
router.post('/', controller.insertRescheduling);
router.put('/', controller.updateRescheduling);
router.put('/status', controller.updateStatus);
router.delete('/:id', controller.deleteRescheduling);
router.get('/:id', controller.getReschedulingById);

module.exports = router;