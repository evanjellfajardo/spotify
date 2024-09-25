const express = require ('express');
const router = express.Router();
const main = require('../controller/mycontroller');

router.get('/', main.index);
router.get('/add', main.add);
router.get('/edit', main.edit);
router.get('/delete', main.delete);
router.post('/save', main.save);


module.exports = router;