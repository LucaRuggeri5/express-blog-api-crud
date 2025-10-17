// dichiaro il framework di express
const express = require('express')
// setto il router
const router = express.Router();
// importiamo il controller
const postsController = require('../controllers/postsController')

// index
router.get('/', postsController.index);
// show
router.get('/:id', postsController.show);
// store
router.post('/', postsController.store);
// update
router.put('/:id', postsController.update);
// update(modify)
router.patch('/:id', postsController.modify);
// delete
router.delete('/:id', postsController.destroy);

module.exports = router