const {Router} = require('express');
const router = Router();

const controller = require('./controller')

router.get('/', controller.getKomersial);
router.post('/', controller.insertKomersial);
router.put('/:id', controller.updateKomersial);
router.delete('/:id', controller.deleteKomersial);
router.get('/:id', controller.getKomersialById);

module.exports = router;