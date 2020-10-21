const express = require('express')
const router = express.Router()
const { getMenu, addMenuItems, deleteMenuItems } = require('../../controllers/menucontroller')


router.route('/menu').get(getMenu).post(addMenuItems)

router.route('/:id').delete(deleteMenuItems)

module.exports = router


