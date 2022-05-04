const { Router } = require("express");
const axios = require ('axios')
const {Character, Episode} = require ('../db')
const router = Router();

// Configurar los routers

const getApiInfo = async () => {
    
    const apiInfo = await axios.get(`https://rickandmortyapi.com/api/character`)
    let allApi = await apiInfo.data.results.map((element) => {
        return {
            id: element.id,
            name: element.id,
            species: element.species,
            origin: element.origin.name,
            image: element.image,
            episode: element.episode
        }
    })
    return allApi
}

router.get('/characters', async (req,res,next) => {
    let allCharacters = await getApiInfo();

    return res.status(200).send(allCharacters)
})

module.exports = router;
