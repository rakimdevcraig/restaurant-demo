const express = require('express')
const router = express.Router()
const { getMenu, getCart, addToCart, addMenuItems, deleteMenuItems } = require('../../controllers/menucontroller')
const { getHomePage, getAdminPage } = require('../../controllers/servepages')


router.route('/menu').get(getMenu).post(addMenuItems)

router.route('/').get(getHomePage)

router.route('/cart').get(getCart).post(addToCart)


router.route('/admin').get(getAdminPage)

router.route('/:id').delete(deleteMenuItems)

module.exports = router


