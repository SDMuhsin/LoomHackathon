require('source-map-support').install();
import express = require('express');
import bodyParser = require('body-parser');
import { Dino } from 'dinoloop';

import { PingController } from './controllers/ping.controller';
import { connect } from 'mongoose';
import { AuthorsController } from './controllers/authors.controller';

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

app.use(bodyParser.json());

const dino = new Dino(app, "/api");

dino.useRouter(() => express.Router());
dino.registerController(PingController);
dino.registerController(AuthorsController);

dino.bind()

app.listen(port, () => console.log(`Server listening on ${port}`));