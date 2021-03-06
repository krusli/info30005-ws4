const express = require('express');
const router = express.Router();

const usersControllers = require('../controllers/users');

router.get('/', usersControllers.getAll);
router.get('/:userID', usersControllers.getOne);

module.exports = router;
