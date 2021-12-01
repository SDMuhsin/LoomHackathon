let router = require('express').Router();
import {User, UserModel} from "../models/user";

/* LOOK AT HOW MUCH CODE I DONT HAVE TO WRITE */
router.get('/', async (req:any,res:any)=>{    
    res.json(await UserModel.find({}).exec())
})
router.get('/:username', async(req:any,res:any)=>{
    let users = await UserModel.find({username:req.params.username}).exec();
    res.json({exists: users.length > 0});
})

/* LOOK HOW EASY IT IS TO SEND AN ERROR RESPONSE */
router.post('/', async(req:any,res:any)=>{

    let user = new UserModel(req.body);
    let dup = await UserModel.find({username:user.username}).exec()
    if(!dup.length){
        let dbUser = await user.save();
        req.session.username = dbUser.username; // Session : This username is basically stored in server side
        req.session.userId = dbUser._id;    // And in client a cookie with a session id is stored ( not set by us)
        res.status(200).json(user)
    }
    else{
        res.status(400).send("user exists");
    }
})


router.get('/session/authcheck', (req:any,res:any)=>{
    console.log("session check", req.session)
    if(req.session.username){
        res.json({authd:true,username:req.session.username})
    }
    else{
        res.json({authd:false});
    }
})


export {router as userRouter};