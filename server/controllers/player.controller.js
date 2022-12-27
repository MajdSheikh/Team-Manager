const  {Player } = require('../models/player.model');
// import { useParams, Link } from "react-router-dom";

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.createPlayer = (request, response) => {
    Player.create(request.body)
        .then(player => response.json({player:player}))
        .catch(err => response.status(400).json(err))
}


module.exports.getAllPlayers = (request, response) => {
    Player.find({})
        .then(players => response.json({players: players}))
        .catch(err => response.json({ message: 'could not find players', error: err}));
}

module.exports.getPlayer = (request, response) => {
    Player.findOne({_id:request.params.id})
        .then(player => response.json(player))
        .catch(err => response.status(404).json(err));
}

module.exports.updatePlayer = (request, response) => {
    Player.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators:true})
        .then(updatedPlayer => response.json({updatedPlayer: updatedPlayer}))
        .catch(err => response.status(400).json(err))
}


module.exports.deletePlayer = (request, response) => {
    Player.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json({deleteConfirmation:deleteConfirmation }))
        .catch(err => response.json({ message: 'could not delete player', error: err}))
}



