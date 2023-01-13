const {Router} = require('express');
const router = Router();

const controller = require('./controller')

router.get('/', controller.getPembatalan);
router.post('/', controller.insertPembatalan);
router.put('/', controller.updatePembatalan);
router.delete('/:id', controller.deletePembatalan);

module.exports = router;