const {Router} = require('express');
const router = Router();

const controller = require('./controller')

router.get('/', controller.getWedding);
router.post('/', controller.insertWedding);
router.put('/:id', controller.updateWedding);
router.delete('/:id', controller.deleteWedding);
router.get('/:id', controller.getWeddingById);

module.exports = router;