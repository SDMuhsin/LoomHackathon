require('source-map-support').install();
import express = require('express');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const cors = require('cors');

import { Dino } from 'dinoloop';

import { PingController } from './controllers/ping.controller';
import { connect } from 'mongoose';
import { AuthorsController } from './controllers/authors.controller';
import {UsersController} from './controllers/users.controller';

import {userRouter} from './routers/userRouter';
import {gameRouter} from './routers/gameRouter';

import {isLoggedIn} from './utility/isLoggedIn';


/*
    Connect to Mongo DB
*/

async function runDbConnect(): Promise<void> {
    
    await connect('mongodb://kaloom:verySecure@127.0.0.1:27017/test?authSource=admin&w=1');
}

runDbConnect().catch(err => console.log(err));

/*
    Start Express app
*/

const app = express();
const port: number = 8000;

// app.use(bodyParser.json()); :DEPRACATED, express comes with this now
app.use(express.urlencoded({extended: true}));
app.use(express.json())

const dino = new Dino(app, "/api");

app.use(cookieParser());
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 ,secure:false,httpOnly:false},
    resave: false 
}));
app.use(cors({origin:"http://localhost:4200",credentials:true}))
app.use('/api/users', userRouter)
app.use('/api/game/',[isLoggedIn], gameRouter)

dino.useRouter(() => express.Router());
dino.registerController(PingController);
dino.registerController(AuthorsController);
//dino.registerController(UsersController)
dino.bind()

app.listen(port, () => console.log(`Server listening on ${port}`));