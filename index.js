const express = require('express')
const app = express();
const collectionRoutes = require('./routers/collection.router.js')
const movieRoutes = require('./routers/movie.router.js');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/movie/', movieRoutes);
app.use('/collection/', collectionRoutes);

app.listen(3000,() => {
  console.log('Server running in the port 3000');
});