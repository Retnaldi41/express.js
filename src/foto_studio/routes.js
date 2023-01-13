const {Router} = require('express');
const router = Router();

const controller = require('./controller')

router.get('/', controller.getStudio);
router.post('/', controller.insertStudio);
router.put('/:id', controller.updateStudio);
router.delete('/:id', controller.deleteStudio);
router.get('/:id', controller.getStudioById);

module.exports = router;