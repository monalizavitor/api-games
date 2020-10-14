const gamesModel = require('../models/modelGames.json')

const updateGames = (req, res) => {
    const id = parseInt(req.params.id)
    const update = req.body
    const gamesId = gamesModel.map(item => item.id = id)
    const newGame = { id, ...update }
    const gameUpdate = gamesModel.splice(gamesId, 1, newGame)

    res.status(200).send('Game alterado com sucesso!')
    console.log(gameUpdate)


}

const updatePatch = (req, res) => {
    const body = req.body
    const id = parseInt(req.params.id)
    const gameToUpdate = gamesModel.find(item => item.id == id)

    Object.keys(body).forEach((key) => {
        gameToUpdate[key] = body[key]
    })

    res.status(200).send('Game alterado com sucesso!')
    console.log(gameToUpdate)

}


module.exports = {
    updateGames,
    updatePatch
}