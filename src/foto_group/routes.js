const {Router} = require('express');
const router = Router();

const controller = require('./controller')

router.get('/', controller.getGroup);
router.post('/', controller.insertGroup);
router.put('/:id', controller.updateGroup);
router.delete('/:id', controller.deleteGroup);
router.get('/:id', controller.getGroupById);

module.exports = router;