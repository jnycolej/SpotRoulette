const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const routes = require('./scripts/routes/spotrou.routes');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use('/api/spotrou', routes);


app.listen(port);
console.log(`Server is running on port ${port}...`);
