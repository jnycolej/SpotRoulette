const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
require('dotenv').config();

const routes = require('./scripts/routes/spotrou.routes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('styles'));
app.use('/styles', express.static(path.join(__dirname, 'styles')));
app.use('/styles', express.static(path.join(__dirname, 'styles')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname));
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
