let router = require('express').Router();
import {Game, GameModel} from '../models/game'

router.get('/', async (req:any,res:any)=>{
    res.json(await GameModel.find({}).exec());
})

// Create a new game
router.post('/', async(req:any,res:any)=>{
    /* STEPS
        1. Check if a game with the same name,gameMaster, exists
        2. If not, create a new code/password
        3. Create game
        4. Send game data back
    */

    let game = req.body;
    let dupes = await GameModel.find({gameMaster:req.session.userId,name:game.name}).exec()
    if(dupes.length > 0){
        res.status(400).send("Game exists")
    }
    else{
        // Find the latest game
        let games = await GameModel.find({}).sort({code:-1}).limit(1);
        let newCode = games.length ? games[0].code + 1 : 1;
        
        game.gameMaster = req.session.userId;
        game.code = newCode;
        try{
            let newGame = new GameModel(game);
            let saveResp = await newGame.save();
            res.json(saveResp);
        }
        catch(e){
            res.status(500).json(e)
        }
        
    }

})
export {router as gameRouter};