const express = require('express');
const router = express.Router();
const mailController = require('../controllers/mailController');

router.get('/mail/user/:email',mailController.getUser)
router.get('/mail/send',mailController.sendMail);
router.get('/mail/drafts/:email', mailController.getDrafts);
router.get('/mail/read/:messageId', mailController.readMail);

module.exports = router;