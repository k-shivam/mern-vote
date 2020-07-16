require('dotenv').config();

var express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser');

const handle = require('./handlers');
const routes = require('./routes');
const db = require('./models');

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());


app.get('/', (req, res) => res.json({hello: 'world'}));
app.use('/api/auth', routes.auth);

app.use(handle.notFound);

app.use(handle.errors);

app.listen(port, console.log('Server started on port', port));