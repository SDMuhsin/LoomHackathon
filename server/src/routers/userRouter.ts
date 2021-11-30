let router = require('express').Router();
import {User, UserModel} from "../models/user";

/* LOOK AT HOW MUCH CODE I DONT HAVE TO WRITE */
router.get('/', async (req:any,res:any)=>{    
    res.json(await UserModel.find({}).exec())
})

/* LOOK HOW EASY IT IS TO SEND AN ERROR RESPONSE */
router.post('/', async(req:any,res:any)=>{
    console.log("Body", req.body)
    let user = new UserModel(req.body);
    let dup = await UserModel.find({username:user.username}).exec()
    if(!dup.length){
        let dbUser = await user.save();
        req.session.username = dbUser.username;
        req.session.userId = dbUser._id;
        res.status(200).json(user)
    }
    else{
        res.status(400).send("user exists");
    }
})

router.get('/test/session', (req:any,res:any)=>{
    res.json(req.session)
})

export {router as userRouter};