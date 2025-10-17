// dichiaro il framework di express
const express = require('express')

const router = express.Router();

// index
router.get('/', function (req, res) {
  res.send('Lista delle ricette');
})

// show
router.get('/:id', function (req,res) {
  res.send('Ricetta numero' + req.params.id);
})

// store
router.post('/', function (req, res) {
  res.send('Creazione delle ricette');
})

// update
router.put('/:id', function (req,res) {
  res.send('Modifica integrale della ricetta' + req.params.id);
})

// update(modify)
router.patch('/:id', function (req,res) {
  res.send('Modifica parziale della ricetta' + req.params.id);
})

// delete
router.delete('/:id', function (req,res) {
  res.send('Eliminazione della ricetta' + req.params.id);
})

module.exports = router