const express = require('express')

// const Person = require('../models/personModel')

const { createPerson, getPerson, updatePerson, deletePerson } = require('../controller/personController');

const router = express.Router();

router.post('/', createPerson);

router.get('/:user_id', getPerson);

router.patch('/:user_id', updatePerson);

router.delete('/:user_id', deletePerson);

module.exports = router;