const express = require('express')

// const Person = require('../models/personModel')

const { createPerson, getPerson, updatePerson, deletePerson } = require('../controller/personController');

const router = express.Router();

router.post('/', createPerson);

router.get('/:user_id', getPerson);

router.patch('/:user_id', updatePerson);

router.delete('/:user_id', deletePerson);

router.get('/', (req, res) => {
    res.status(405).json({
      error: 'Method Not Allowed',
      message: 'Send a POST request to this endpoint, not a GET. Check the API docs for more information.',
      docs: 'https://github.com/Topman-14/hng_stage_two/blob/main/DOCUMENTATION.md'
    });
  });

module.exports = router;