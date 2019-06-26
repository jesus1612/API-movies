const express = require('express');
const router = express.Router();

// Controllers
const movieController = require('../controllers/movie.controller');

router.route('/:id')
  .get(movieController.getMovieForID);

router.route('/recommendations/:id')
  .get(movieController.getRecomendationsForID);

module.exports = router;