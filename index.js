const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const configData = fs.readFileSync('config.json');
const config = JSON.parse(configData);
const path = require('path');

app.set('port', config.api.port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'client')));

app.listen(app.get('port'), () => {
  console.log('Spotlight Server running on port: ' + app.get('port'));
});

const routes = require('./routes')(app, config);
