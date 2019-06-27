const express = require('express')
const app = express();
const collectionRoutes = require('./routers/collection.router.js')
const movieRoutes = require('./routers/movie.router.js');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/movie/', movieRoutes);
app.use('/collection/', collectionRoutes);

app.listen(8080,() => {
  console.log('Server running in the port 8080');
});