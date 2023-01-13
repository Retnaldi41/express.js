const {Router} = require('express');
const router = Router();

const controller = require('./controller')

router.get('/', controller.getExpense);
router.get('/sum-expense', controller.sumExpense);
router.post('/', controller.insertExpense);
router.put('/', controller.updateExpense);
router.delete('/:id', controller.deleteExpense);

module.exports = router;