const {Router} = require('express');
const router = Router();

const controller = require('./controller')

router.get('/', controller.getCosplay);
router.post('/', controller.insertCosplay);
router.put('/:id', controller.updateCosplay);
router.delete('/:id', controller.deleteCosplay);
router.get('/:id', controller.getCosplayById);

module.exports = router;