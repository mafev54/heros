const Hero = require('../models/hero')

const controllerHero = {
    create: async (req,res) =>{
        try{
            const name = req.body.name
            await Hero.create({
                name:name
            })
            res.json({msg:'Created'})
        } catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    getHeroes: async (req,res) =>{
        try{
            const heros = await Hero.find({})
            res.json(heros)
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    getHeroForId: async (req,res) =>{
        try{
            const {id} = req.params
            console.log(id)
            const hero = await Hero.findById(id)
            res.json(hero)
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    updateHero: async (req,res) =>{
        try{
            const {id} = req.params
            const name = req.body.name
            await Hero.findByIdAndUpdate(id,{
                name:name
            })
            res.json({msg:'Update'})
        }catch(err){
            console.error(err)
            return res.status(500).json({msg:err.message})            
        }
    },
    deleteHero:async (req,res)=>{
        try {
            const {id} = req.params
            await Hero.findByIdAndDelete(id)
            res.json({msg:'Delete'})     
        } catch (err) {
            console.error(err)
            return res.status(500).json({msg:err.message})
        }
    }

}

module.exports = controllerHero