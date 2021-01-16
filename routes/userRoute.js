const express = require ('express')
const router = express.Router()

const UserControl = require('../controllers/userControl')

router.post('/', UserControl.create)
router.get('/', UserControl.show)


module.exports = router