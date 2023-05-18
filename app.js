const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');

const routes = require('./scripts/routes/spotrou.routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname));
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
