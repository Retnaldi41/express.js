const {Router} = require('express');
const router = Router();

const controller = require('./controller')

router.get('/', controller.getUser);
router.post('/tambah', controller.insertUser);
router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);
router.post('/login', controller.getUserById);

module.exports = router;