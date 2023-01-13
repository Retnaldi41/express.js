const {Router} = require('express');
const router = Router();

const controller = require('./controller')

router.get('/', controller.getBooking);
router.post('/', controller.insertBooking);
router.put('/', controller.updateBooking);
router.put('/rescheduling', controller.updateRescheduling);
router.put('/pembatalan', controller.updatePembatalan);
router.put('/status', controller.updateStatus);
router.put('/transfer', controller.updateTransfer);
router.delete('/:id', controller.deleteBooking);
router.get('/:id', controller.getBookingById);

module.exports = router;