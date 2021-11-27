require('source-map-support').install();
import express = require('express');
import bodyParser = require('body-parser');
import { Dino } from 'dinoloop';

import { PingController } from './controllers/ping.controller';

const app = express();
const port: number = 8000;

app.use(bodyParser.json());

const dino = new Dino(app, "/api");

dino.useRouter(() => express.Router());
dino.registerController(PingController);

dino.bind()

app.listen(port, () => console.log(`Server listening on ${port}`));