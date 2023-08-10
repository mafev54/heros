const express =require('express')

const controllerHero =require('../controllers/hero')

const router = express.Router()


router.get('/',controllerHero.getHeroes)
router.get('/:id',controllerHero.getHeroForId)
router.post('/create',controllerHero.create)
router.patch('/update/:id',controllerHero.updateHero)
router.delete('/delete/:id',controllerHero.deleteHero)

module.exports = router